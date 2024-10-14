import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);

    const { firstName, lastName, email, phone, company, industry, website, message, agreeToTerms } = bodyJSON;

    // OAuth2 Client Setup
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.EMAIL_CLIENT_ID, // ClientID
      process.env.EMAIL_CLIENT_SECRET, // Client Secret
      "https://developers.google.com/oauthplayground" // Redirect URL (Google's OAuth2 Playground)
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN, // Refresh Token
    });

    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.EMAIL_CLIENT_ID,
        clientSecret: process.env.EMAIL_CLIENT_SECRET,
        refreshToken: process.env.EMAIL_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Mail Options for the recipient
    const mailOptionsRecipient = {
      from: `"Danube Connections" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Order Form Submission",
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Company Name: ${company}
        Industry: ${industry}
        Website: ${website}
        Message: ${message}
        Agree to Terms: ${agreeToTerms ? 'Yes' : 'No'}
      `,
    };

    // Mail Options for the client
    const mailOptionsClient = {
      from: `"Danube Connections" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Danube Connections: Service Order Confirmation",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif; border-right: 1px solid #222222; border-left: 1px solid #222222;">
          <thead>
              <tr>
                  <th style="background-image: url('https://nexoria.ai/images/letter-top.jpg'); background-size: cover;background-position: center center; background-repeat: no-repeat; height: 117px;"></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td style="padding: 50px 40px; font-family: Roboto, sans-serif; color:#0A0A0A;">
                      <h2 style="text-align: left; font-size: 20px;">Dear ${firstName},</h2>
                      <p style="font-size: 16px; line-height: 19px;">Thank you for reaching out to Danube Connections! We have received your request for a service and appreciate your interest in our offerings.</p>
                      <p style="font-size: 16px; line-height: 19px;">Our manager will review your inquiry and contact you shortly to discuss your needs. We aim to respond quickly to ensure you receive the required assistance.</p>
                      <p style="font-size: 16px; line-height: 19px;">If you have any questions or need further assistance, please contact us at <a href="mailto:info@nexoria.ai" style="color: #008967; font-weight: 600;text-decoration: underline;">info@nexoria.ai</a>.</p>
                      <p style="font-size: 16px; line-height: 19px;">Thank you for choosing Danube Connections. We look forward to assisting you!</p>
                      <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                          Best regards,
                          <br>
                          The Danube Connections Team
                      </p>
                  </td>
              </tr>
          </tbody>
          <tfoot>
              <tr>
                  <td style="background-color: #222222; font-weight: 600; font-family: Roboto, sans-serif;padding: 24px 0;">
                      <p style="font-size: 20px; line-height: 24px; color: #ffffff; text-align: center;margin: 0;">Thanks for using <a href="https://nexoria.ai/" style="color: #008967; text-decoration: none;">Danube Connections</a></p>
                  </td>
              </tr>
          </tfoot>
        </table>
      `,
    };

    // Send emails
    await transporter.sendMail(mailOptionsRecipient);
    // await transporter.sendMail(mailOptionsClient); // Uncomment to send confirmation to the client

    console.log("Emails sent successfully.");
    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}

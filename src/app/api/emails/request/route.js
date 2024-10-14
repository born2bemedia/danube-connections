import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      industry,
      website,
      message,
      agreeToTerms,
    } = bodyJSON;

    // OAuth2 Client Setup
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.EMAIL_CLIENT_ID, // Client ID
      process.env.EMAIL_CLIENT_SECRET, // Client Secret
      "https://developers.google.com/oauthplayground" // Redirect URL (Google's OAuth2 Playground)
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN, // Refresh Token
    });

    // Get new access token
    const accessTokenResponse = await oauth2Client.getAccessToken();
    const accessToken = accessTokenResponse?.token;

    if (!accessToken) {
      throw new Error("Failed to generate access token");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.EMAIL_CLIENT_ID,
        clientSecret: process.env.EMAIL_CLIENT_SECRET,
        refreshToken: process.env.EMAIL_REFRESH_TOKEN,
        accessToken: accessToken, // Use dynamically generated access token
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptionsRecipient = {
      from: `"Danube Connections" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Consultation Form Submission",
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Company Name: ${company}
        Industry: ${industry}
        Website: ${website}
        Message: ${message}
        Agree to Terms: ${agreeToTerms ? "Yes" : "No"}
      `,
    };

    const mailOptionsClient = {
      from: `"Danube Connections" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We have received your request",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif">
          <thead>
            <tr>
              <td>
                <img style="width: 100%" src="https://danubestrategic.com/images/email_header.png" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 40px">
                <h2 style="text-align: left; font-size: 20px;color:#202020;">Dear ${firstName} ${lastName},</h2>
                <p style="text-align: left; font-size: 16px;color:#202020;">Thank you for submitting your consultation request. We have received it and are currently reviewing the details provided.</p>
                <p style="text-align: left; font-size: 16px;color:#202020;">Our team will contact you shortly to discuss your inquiry further and to arrange a suitable time for your consultation, along with the necessary experts to assist you.</p>
                <p style="text-align: left; font-size: 16px;color:#202020;">If you have any additional questions in the meantime, please feel free to contact us at danubestrategic@gmail.com.</p>
                <h2 style="text-align: left; font-size: 20px;color:#202020;"> Best regards,<br>Danube Connections</h2>
              </td>
            </tr>
          </tbody>
          <tfoot >
            <td style="padding: 24px 40px;background: #222222;background-size:cover;font-size: 20px;text-decoration: none;color: #ffffff;text-align: center;">
              Thanks for using <a href="https://danubestrategic.com/" style="color: #fff;font-size: 20px;text-decoration: none;color: #ffffff;">danubestrategic.com</a>
            </td>
          </tfoot>
        </table>
      `,
    };

    // Send emails
    await transporter.sendMail(mailOptionsRecipient);
    await transporter.sendMail(mailOptionsClient);
    console.log("Emails sent successfully.");
    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({
      message: "COULD NOT SEND MESSAGE",
      error: error.message,
    });
  }
}

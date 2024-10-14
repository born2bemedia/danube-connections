import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);

    const { firstName, lastName, email, phone, company, industry, website, message, agreeToTerms, serviceVal } = bodyJSON;

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
      subject: "Order Form Submission",
      text: `
        Service: ${serviceVal}
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

    // Send emails
    await transporter.sendMail(mailOptionsRecipient);
    console.log("Emails sent successfully.");
    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}

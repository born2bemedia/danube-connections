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
      skills,
      letter,
      position,
      cv, // Expecting a base64 encoded file with metadata
      agreeToTerms,
    } = bodyJSON;

    // OAuth2 Client Setup
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.EMAIL_CLIENT_ID, // Client ID
      process.env.EMAIL_CLIENT_SECRET, // Client Secret
      "https://developers.google.com/oauthplayground" // Redirect URL
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

    // Prepare the email content with the CV attachment
    const mailOptionsRecipient = {
      from: `"Danube Connections" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Job Application Submission",
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Skills: ${skills}
        Position: ${position}
        Cover Letter: ${letter}
        Agree to Terms: ${agreeToTerms ? 'Yes' : 'No'}
      `,
      attachments: cv
        ? [
            {
              filename: cv.filename,
              content: cv.base64,
              encoding: "base64",
              contentType: cv.mimetype,
            },
          ]
        : [],
    };

    // Send email
    await transporter.sendMail(mailOptionsRecipient);
    console.log("Email sent successfully.");
    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}

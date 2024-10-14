import { NextResponse, NextRequest } from "next/server";
const { google } = require("googleapis");

// Функція для створення email в форматі base64 для Gmail API
function makeBody(to, from, subject, message) {
  const str = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    "",
    message,
  ].join("\n");

  return Buffer.from(str)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function POST(request) {
  try {
    // Отримуємо тіло запиту
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);

    const { firstName, lastName, email, phone, company, industry, website, message, agreeToTerms } = bodyJSON;

    // Налаштування OAuth2 клієнта
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.EMAIL_CLIENT_ID, // Client ID
      process.env.EMAIL_CLIENT_SECRET, // Client Secret
      "https://developers.google.com/oauthplayground" // Redirect URL (Google OAuth Playground)
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN, // Refresh token
    });

    // Отримуємо access token
    const accessToken = await oauth2Client.getAccessToken();

    if (!accessToken.token) {
      throw new Error("Failed to generate access token.");
    }

    // Підключаємося до Gmail API
    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    // Підготовка email для відправки адміністратору
    const adminEmailBody = makeBody(
      process.env.EMAIL_USER, // Отримувач (адміністратор)
      process.env.EMAIL_USER, // Відправник (адміністратор)
      "Order Form Submission", // Тема
      `
      <p><b>First Name:</b> ${firstName}</p>
      <p><b>Last Name:</b> ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Company:</b> ${company}</p>
      <p><b>Industry:</b> ${industry}</p>
      <p><b>Website:</b> ${website}</p>
      <p><b>Message:</b> ${message}</p>
      <p><b>Agree to Terms:</b> ${agreeToTerms ? 'Yes' : 'No'}</p>
      `
    );

    // Підготовка email для відправки клієнту
    const clientEmailBody = makeBody(
      email, // Отримувач (клієнт)
      process.env.EMAIL_USER, // Відправник (адміністратор)
      "Danube Connections: Service Order Confirmation", // Тема
      `
      <h2>Dear ${firstName},</h2>
      <p>Thank you for reaching out to Danube Connections! We have received your request for a service and appreciate your interest in our offerings.</p>
      <p>Our manager will review your inquiry and contact you shortly to discuss your needs. We aim to respond quickly to ensure you receive the required assistance.</p>
      <p>If you have any questions or need further assistance, please contact us at <a href="mailto:${process.env.EMAIL_USER}">${process.env.EMAIL_USER}</a>.</p>
      <p>Best regards,</p>
      <p>The Danube Connections Team</p>
      `
    );

    // Відправка листа адміністратору
    await gmail.users.messages.send({
      userId: 'me',
      resource: {
        raw: adminEmailBody,
      },
    });

    // Відправка листа клієнту
    await gmail.users.messages.send({
      userId: 'me',
      resource: {
        raw: clientEmailBody,
      },
    });

    console.log("Emails sent successfully.");
    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    //console.error("Error sending email:", error);
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE", error: error.message }, { status: 500 });
  }
}

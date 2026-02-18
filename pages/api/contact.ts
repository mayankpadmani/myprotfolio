import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, contact, subject, message } = req.body;

  console.log("Received form data:", { name, email, contact, subject, message });
console.log("ENV EMAIL:", process.env.MY_EMAIL);
console.log("ENV PASS:", process.env.MY_EMAIL_PASSWORD);

  if (!name || !email || !subject || !message) {
    console.log("Missing fields");
    return res.status(400).json({ error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.MY_EMAIL,
    subject: `Portfolio Contact - ${subject}`,
    text: `
Name: ${name}
Email: ${email}
Contact: ${contact}
Subject: ${subject}

Message:
${message}
    `,
  };

  try {
    console.log("Sending email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent.");
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Email send error:", error);
    res.status(500).json({ error: "Email sending failed" });
  }
}

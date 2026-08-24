import nodemailer from "nodemailer";

export async function sendEmail(to, subject, html) {
  // create transporter INSIDE the function
  // so env vars are always loaded by the time it runs
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.BREVO_SMTP_USER,
      pass: process.env.BREVO_SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Traffic Prediction" <vedantsaxena6901@gmail.com>',
    to,
    subject,
    html,
  });
}
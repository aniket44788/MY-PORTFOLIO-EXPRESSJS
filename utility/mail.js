const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASS,
  },
});

const mailOptions = {
  from: `"App Contact" <${process.env.NODEMAILER_EMAIL}>`,
  to: process.env.NODEMAILER_EMAIL,
  subject: "Message from User",
  text: "User's message content",
  replyTo: "user@example.com", // dynamic value entered by user
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Email sent: " + info.response);
  }
});
module.exports = transporter
const express = require("express");
const transporter = require("../utility/mail");
const nodemailer = express.Router();

nodemailer.post("/", async (req, res) => {
  try {
    const { email, name, sub, msg } = req.body;
    const informaiton = await transporter.sendMail({
      from: email,
      to: "darkpanda44788@gmail.com",
      subject: sub,
      text: msg,
    });

    return res.status(200).json({
      message: "Email sended successfully.",
      result: informaiton,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to send mail.",
      error: error.message,
    });
  }
});

module.exports = nodemailer;

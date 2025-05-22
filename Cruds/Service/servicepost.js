const express = require("express");
const servicepost = express.Router();
const myserviceschema = require("../../Schemas/serviceschema");
// const upload  = require("../../utility/multer")

servicepost.post("/", async (req, res) => {
  try {
    const { no, title, description } = req.body;

    const myservices = new myserviceschema({
      no,
      title,
      description,
    });

    const savemyservices = await myservices.save();

    return res.status(201).json({
      message: "Service uploaded successfully",
      result: savemyservices,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to post service",
      error: error.message,
    });
  }
});

module.exports = servicepost;

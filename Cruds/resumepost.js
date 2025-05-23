const express = require("express");
const path = require("path");
const MyresumePost = require("../Schemas/resumeschema");
const resumepost = express.Router();
const upload = require("../utility/multer");

resumepost.post("/", upload.single("profile"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const profile = req.file.path;
    const { name, description } = req.body;

    const resumeData = new MyresumePost({
      profile,
      name,
      description,
    });

    const resumeDataSave = await resumeData.save();

    return res.status(201).json({
      message: "Data saved successfully",
      result: resumeDataSave,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to upload data",
      error: error.message,
    });
  }
});

module.exports = resumepost;

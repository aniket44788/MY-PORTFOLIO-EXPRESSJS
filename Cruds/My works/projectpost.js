const express = require("express");
const projectpost = express.Router();
const myProject = require("../../Schemas/projectschema");
const upload = require("../../utility/multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
projectpost.post("/", upload.single("projectData"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Upload file from local storage to Cloudinary
    const cloudinaryResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "my-portfolio",
    });

    // Delete the local file after uploading to Cloudinary
    fs.unlink(req.file.path, (err) => {
      if (err) console.error("Failed to delete local file:", err);
    });

    // Save the Cloudinary image URL in your database
    const updateProject = new myProject({
      projectimages: cloudinaryResult.secure_url,
    });

    const saveProjectData = await updateProject.save();

    return res.status(201).json({
      message: "Project uploaded successfully.",
      result: saveProjectData,
    });
  } catch (error) {
    console.error("Upload failed:", error);
    return res.status(500).json({
      message: "Failed to post data",
      error: error.message,
    });
  }
});

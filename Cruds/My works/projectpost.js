const express = require("express");
const projectpost = express.Router();
const myProject = require("../../Schemas/projectschema");
const upload = require("../../utility/multer");
projectpost.post("/", upload.single("projectData"), async (req, res) => {
  try {
    const projectimages = req.file.path;

    const updateProject = new myProject({
      projectimages,
    });

    const saveProjectData = await updateProject.save();

    return res.status(201).json({
      message: "Project uploaded successfully.",
      result: saveProjectData,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to post data",
      error: error.message,
    });
  }
});

module.exports = projectpost;

const express = require("express");
const myProject = require("../../Schemas/projectschema");
const upload = require("../../utility/multer")
const projectupdate = express.Router();

projectupdate.patch("/:id", upload.single("projectData"), async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

     if (req.file) {
      data.projectimages = req.file.path;
    }

    const dataUpdate = await myProject.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );

    if (!dataUpdate) {
      return res.status(404).json({
        message: "Document not found",
      });
    }

    return res.status(200).json({
      message: "Data updated successfully",
      result: dataUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update data",
      error: error.message,
    });
  }
});

module.exports = projectupdate;

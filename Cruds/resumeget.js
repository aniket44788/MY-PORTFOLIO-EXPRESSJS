const express = require("express");
const MyresumePost = require("../Schemas/resumeschema");
const resumeget = express.Router();

resumeget.get("/", async (req, res) => {
  try {
    const findData = await MyresumePost.find({});
    return res.status(200).json({
      message: "Data found successfully",
      result: findData,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to find data",
      error: error.message,
    });
  }
});
module.exports = resumeget;

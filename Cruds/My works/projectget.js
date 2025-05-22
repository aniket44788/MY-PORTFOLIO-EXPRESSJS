const express = require("express");
const myProject = require("../../Schemas/projectschema");
const projectget = express.Router();

projectget.get("/", async (req, res) => {
  try {

    const finddata = await myProject.find({});

    return res.status(200).json({
      message: "Data found successfully.",
      result : finddata
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch Data",
      error: error.message,
    });
  }
});
module.exports = projectget;

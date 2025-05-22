const express = require("express");
const aboutpageget = express.Router();
const aboutpost = require("../Schemas/aboutpost")

aboutpageget.get("/", async (req, res) => {
  try {

        const fetchData = await aboutpost.find({})


    return res.status(200).json({
      message: "Data fetch successfully",
      result : fetchData
    });
  } catch (error) {
    return res.status(404).json({
      message: "Failed to get data",
      error: error.message,
    });
  }
});

module.exports = aboutpageget;

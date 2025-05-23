const express = require("express");
const aboutpage = express.Router();
const aboutpageData = require("../Schemas/aboutpost");
const upload = require("../utility/multer");

aboutpage.post("/", upload.single("myimage"), async (req, res) => {
  try {
    const myimage = req.file.path;
    const { abouttitle, about } = req.body;

    const aboutUpdate = new aboutpageData({
      abouttitle,
      myimage,
      about,
    });
    const saveaboutupdate = await aboutUpdate.save();

    return res.status(201).json({
      message: "Data post successfully",
      result: saveaboutupdate,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to post data",
      error: error.message,
    });
    
  }
});

module.exports = aboutpage;

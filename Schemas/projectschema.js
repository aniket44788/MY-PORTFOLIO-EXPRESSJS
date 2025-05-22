const mongoose = require("mongoose");

const project = mongoose.Schema({
  projectimages: {
    type: String,
    required: true,
  },
});

const myProject = mongoose.model("projectdata", project);
module.exports = myProject;

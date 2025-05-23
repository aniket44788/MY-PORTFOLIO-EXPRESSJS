const mongoose = require("mongoose");

const aboutdata = mongoose.Schema({
  abouttitle: {
    type: String,
    required: true,
  },
  myimage: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});
const aboutpageData = mongoose.model("aboutpagedatas", aboutdata);
module.exports = aboutpageData;

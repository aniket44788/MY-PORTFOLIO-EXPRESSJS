const mongoose = require("mongoose");

const servicemodel = mongoose.Schema({
  no: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const myserviceschema = mongoose.model("serviceschema", servicemodel);
module.exports = myserviceschema

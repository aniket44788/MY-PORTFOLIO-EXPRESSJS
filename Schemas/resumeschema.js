const mongoose = require("mongoose");

const resumePost = mongoose.Schema({

    profile: {
        type : String,
        required : true
    },
    name: {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    },

})
const MyresumePost = mongoose.model("Profile" , resumePost);
module.exports = MyresumePost;
const mongoose = require("mongoose");
const myAuth = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required :true
    },
    password : {
        type : String,
        required : true
    }
});

const userAuth = mongoose.model("Authenticaions" , myAuth);
module.exports = userAuth;
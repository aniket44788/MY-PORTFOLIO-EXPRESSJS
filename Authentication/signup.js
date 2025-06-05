const express = require("express");
const userAuth = require("../Schemas/auth");
const bcryptjs = require("bcryptjs")
const signup = express.Router();

signup.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if ((!username, !email, !password)) {
      return res.status(400).json({
        message: "All fields required.",
      });
    }
    const lowercaseEmail = email.toLowerCase();

    const existUser = await userAuth.findOne({email : lowercaseEmail})
    if(existUser){
        return res.status(409).json({
            message : "Email is already Used"
        })
    }
    const hashPassword = await bcryptjs.hash(password ,10)

    const newUser = new userAuth({
        username, 
        email : lowercaseEmail,
        password : hashPassword
    })
    const saveUser = await newUser.save()

    return res.status(201).json({
        message : "Sign up Successfull",
        data  : saveUser
    })

  } catch (error) {
    return res.status(500).json({
        message :  "Failed to sign up"
    })
  }
});

module.exports = signup;

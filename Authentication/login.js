const express = require("express");
const userAuth = require("../Schemas/auth")
const bcrypt = require("bcryptjs")
const login = express.Router();

login.post("/" , async (req,res)=>{
    try {
        const {email, password} = req.body;
        const user = await userAuth.findOne({email});
        if(!user){
            return res.status(404).json({
                message : "User not registered!",
            })
        }
        const myPass = await bcrypt.compare(password, user.password);

        if(!myPass){
            return res.status(404).json({
                message : "Wrong password"
            })
        }
        return res.status(200).json({
            message : "Login successfully.",
            data  : user
        })
    } catch (error) {
        return res.status(500).json({
            message : "Failed to login."
        })
    }
})

module.exports = login
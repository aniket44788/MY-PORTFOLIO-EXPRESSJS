const express = require('express');
const serviceschema = require("../../Schemas/serviceschema");
const serviceget = express.Router();

serviceget.get("/", async (req,res)=>{
    try {
        const myservice = await serviceschema.find({})
        return res.status(200).json({
            message  : "Api found successfully.",
            result : myservice
        })
        
    } catch (error) {
            return res.status(500).json({
                message  : "Failed to fetch api",
                error : error.message
            })
    }
})
module.exports = serviceget
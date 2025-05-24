const express = require("express");
const myProject = require("../../Schemas/projectschema")
const projectdelete = express.Router()

projectdelete.delete("/:id", async (req,res)=>{
    try {
        const {id} = req.params
        const deletedata = await myProject.findByIdAndDelete({_id : id})

            return res.status(200).json({
                message : "Data Deleted!",
                result : deletedata
            })
    } catch (error) {
            return res.status(500).json({
                message : "Failed to delete",
                error : error.message
            })
    }
})
module.exports = projectdelete
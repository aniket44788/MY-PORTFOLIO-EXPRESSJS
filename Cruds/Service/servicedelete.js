const express = require("express")
const myserviceschema = require("../../Schemas/serviceschema")
const deleteService = express.Router()
deleteService.delete("/:id" , async (req,res)=>{
    try {
        const {id} = req.params;
        const deleteServices = await myserviceschema.findByIdAndDelete({_id : id});
        return res.status(200).json({
            message : "Service delete successfully",
            result : deleteServices
        })
    } catch (error) {
            return res.status(404).json({
                message : "Failed to delete Services",
                error  :error.message
            })
    }
})

module.exports = deleteService
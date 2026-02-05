const itemsModel = require('../../models/itemsModel');
const item_geter_controller = async (req,res)=>{
    try {
        const getItems = await itemsModel.find({})
        res.status(200).send({
            success:true,
            message:'sucessfully',
            data:getItems
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL_ERROR"
        })
    }
}
module.exports = item_geter_controller;
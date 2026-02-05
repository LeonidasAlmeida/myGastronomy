const itemsModel = require("../../models/itemsModel")
const item_delete_controller = async (req,res) =>{
    try {
         const {id} = req.params
         if(!id){
            return res.status(400).send({
                success:false,
                message:"EMPTY ID"
            })
         }
         await itemsModel.findByIdAndDelete(id)
         res.status(200).send({
                success:true,
                message:"Successfully to delete  item!",
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = item_delete_controller
const itemsModel = require('../../models/itemsModel');
const item_get_id_controller = async (req,res) =>{
    try {
         const {id} = req.params
         if(!id){
            return res.status(400).send({
                success:false,
                message:"EMPTY ID"
            })
         }
         const getItem = await itemsModel.findById(id)
         res.status(200).send({
                success:true,
                message:"Successfully to get item!",
                data:getItem
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = item_get_id_controller
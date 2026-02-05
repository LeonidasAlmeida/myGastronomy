const orderModel = require('../../models/orderModel');
const order_get_id_controller = async (req,res) =>{
    try {
         const {id} = req.params
         if(!id){
            return res.status(400).send({
                success:false,
                message:"EMPTY ID"
            })
         }
         const getOrder = await orderModel.findById(id)
         res.status(200).send({
                success:true,
                message:"Successfully to get order!",
                data:getOrder
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = order_get_id_controller
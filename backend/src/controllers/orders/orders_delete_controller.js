const orderModel = require("../../models/orderModel")
const order_delete_controller = async (req,res) =>{
    try {
         const {id} = req.params
         if(!id){
            return res.status(400).send({
                success:false,
                message:"EMPTY ID"
            })
         }
         await orderModel.findByIdAndDelete(id)
         res.status(200).send({
                success:true,
                message:"Successfully to delete order!",
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = order_delete_controller
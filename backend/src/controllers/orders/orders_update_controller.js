const orderModel = require("../../models/orderModel");
const order_update_controller = async (req,res) =>{
    try {
        const {title,orderItems,user} = req.body; 
        const {id} = req.params

         if(!id){
            return res.status(400).send({
                success:false,
                message:"EMPTY ID"
            })
         }

          const matchId = await orderModel.findOne({_id:id})
          if(!matchId){
            return res.status(404).send({
                success:false,
                message:"NOT_FOUND"
            })
         }

           const matchTitle = await orderModel.findOne({title:title})
                             if(matchTitle){
                            return res.status(500).send({
                                success:false,
                                message:"Title already exist"
                            })}
         
         //validations request body
         if(title) matchId.title = title;
         if(orderItems) matchId.orderItems = orderItems;
         if(user) matchId.user = user;

         await matchId.save()

         res.status(200).send({
                success:true,
                message:"Successfully to update order!",
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = order_update_controller;
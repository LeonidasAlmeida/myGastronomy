const orderModel = require('../../models/orderModel');
const orderValidation = require('../../validations/orderValidations');
const order_create_controller = async (req,res)=>{
    try {
        const {error,value} = orderValidation.validate(req.body);
        if(error){
            return res.status(400).send({
                success:false,
                message:"NOT_FOUND"
            })}
            const matchTitle = await orderModel.findOne({title:value.title})
             if(matchTitle){
            return res.status(500).send({
                success:false,
                message:"Title already exist"
            })}
           
            await orderModel.create({
                title:value.title,
                orderItems:value.orderItems,
                user:value.user
            });
           res.status(200).send({
                success:true,
                message:"Successfully to create order!",
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR "
        })
    }
}
module.exports = order_create_controller

const itemsModel = require('../../models/itemsModel');
const itemValidations = require('../../validations/itemsValidations');
const item_create_controller = async (req,res)=>{
    try {
        const {error,value} = itemValidations.validate(req.body);
        if(error){
            return res.status(400).send({
                success:false,
                message:"NOT_FOUND"
            })}
            const matchName = await itemsModel.findOne({name:value.name})
             if(matchName){
            return res.status(500).send({
                success:false,
                message:"Name already exist"
            })}
           
            await itemsModel.create({
                name:value.name,
                price:value.price,
                description:value.description,
                image:value.image, 
                category:value.category
            });
           res.status(200).send({
                success:true,
                message:"Successfully to create items!",
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR "
        })
    }
}
module.exports = item_create_controller
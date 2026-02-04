const restaurantModel = require('../../models/restaurantModel');
const restaurantValidations= require('../../validations/restaurantValidations');
const restaurant_create_controller = async (req,res)=>{
    try {
        const {error,value} = restaurantValidations.validate(req.body);

        if(error){
            return res.status(400).send({
                success:false,
                message:"NOT_FOUND"
            })}
            const matchTitle = await restaurantModel.findOne({title:value.title})
             if(matchTitle){
            return res.status(500).send({
                success:false,
                message:"Title already exist"
            })}
            //save into database
            await restaurantModel.create({
                title:value.title,
                address:value.address
            });
           res.status(200).send({
                success:true,
                message:"Successfully to create user!",
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR here"
        })
    }
}
module.exports = restaurant_create_controller
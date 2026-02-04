const restaurantModel = require('../../models/restaurantModel');
const restaurant_geter_controller = async (req,res) =>{
    try {
         const getRestaurant = await  restaurantModel.find({})
         res.status(200).send({
                success:true,
                message:"Successfully to get restaurants !",
                data: getRestaurant
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = restaurant_geter_controller
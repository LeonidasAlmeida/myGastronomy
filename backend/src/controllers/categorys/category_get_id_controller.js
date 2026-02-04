const categoryModel = require('../../models/categoryModel');
const category_get_id_controller = async (req,res) =>{
    try {
         const {id} = req.params
         if(!id){
            return res.status(400).send({
                success:false,
                message:"EMPTY ID"
            })
         }
         const getRestaurant = await categoryModel.findById(id)
         res.status(200).send({
                success:true,
                message:"Successfully to get restaurante!",
                data:getRestaurant
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = category_get_id_controller
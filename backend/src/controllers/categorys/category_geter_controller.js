const categoryModel = require('../../models/categoryModel');
const category_geter_controller = async (req,res) =>{
    try {
         const getCategory = await categoryModel.find({})
         res.status(200).send({
                success:true,
                message:"Successfully to get restaurante!",
                data:getCategory
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = category_geter_controller
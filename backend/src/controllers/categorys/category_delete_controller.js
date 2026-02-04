const categoryModel = require('../../models/categoryModel');
const category_delete_controller = async (req,res) =>{
    try {
         const {id} = req.params
         if(!id){
            return res.status(400).send({
                success:false,
                message:"EMPTY ID"
            })
         }
         await categoryModel.findByIdAndDelete(id)
         res.status(200).send({
                success:true,
                message:"Successfully to delete category!",
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = category_delete_controller
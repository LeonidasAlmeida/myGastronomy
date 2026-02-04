const usersModel = require('../../models/usersModel');
const user_delete_controller = async (req,res) =>{
    try {
         const {id} = req.params
         if(!id){
            return res.status(400).send({
                success:false,
                message:"EMPTY ID"
            })
         }
         await usersModel.findByIdAndDelete(id)
         res.status(200).send({
                success:true,
                message:"Successfully to delete user!",
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = user_delete_controller
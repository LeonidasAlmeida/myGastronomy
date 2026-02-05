const usersModel = require('../../models/usersModel');
const user_get_id_controller = async (req,res) =>{
    try {
         const {id} = req.params
         if(!id){
            return res.status(400).send({
                success:false,
                message:"EMPTY ID"
            })
         }
         const getOrder = await usersModel.findById(id)
         res.status(200).send({
                success:true,
                message:"Successfully to get user!",
                data:getOrder
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = user_get_id_controller
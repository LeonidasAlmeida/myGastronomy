const usersModel = require('../../models/usersModel');
const user_geter_controller = async (req,res) =>{
    try {
         const getUsers  = await (await usersModel.find({}))
         res.status(200).send({
                success:true,
                message:"Successfully to get users !",
                data: getUsers
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = user_geter_controller
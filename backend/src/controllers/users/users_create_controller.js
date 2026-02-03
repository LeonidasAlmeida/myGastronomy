const usersModel = require('../../models/usersModel');
const loginValidations = require('../../validations/loginValidations');
const user_create_controller = async (req,res)=>{
    try {
        const {error,value} = loginValidations(req.body);
        if(error){
            return res.status(404).send({
                success:false,
                message:"NOT_FOUND"
            })}
            await usersModel.create(value);
            return res.status(200).send({
                success:true,
                message:"Successfully to create user!"
            })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR "
        })
    }
}
module.exports = user_create_controller
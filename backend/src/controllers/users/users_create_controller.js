const usersModel = require('../../models/usersModel');
const createJWT = require('../../utils/jwtAuth');
const loginValidations = require('../../validations/loginValidations');
const bcrypt = require('bcrypt')
const user_create_controller = async (req,res)=>{
    try {
        const {error,value} = loginValidations.validate(req.body);
        if(error){
            console.error(error)
            return res.status(400).send({
                success:false,
                message:"NOT_FOUND"
            })}
            const matchEmail = await usersModel.findOne({email:value.email})
             if(matchEmail){
            console.error(error)
            return res.status(500).send({
                success:false,
                message:"Email already exist"
            })}

            await usersModel.create(value);
            return res.status(200).send({
                success:true,
                message:"Successfully to create user!",
            })
          
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR "
        })
    }
}
module.exports = user_create_controller
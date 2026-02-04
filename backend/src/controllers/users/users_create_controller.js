const usersModel = require('../../models/usersModel');
const loginValidations = require('../../validations/loginValidations');
const bcrypt = require('bcryptjs')
const user_create_controller = async (req,res)=>{
    try {
        const {error,value} = loginValidations.validate(req.body);
        if(error){
            return res.status(400).send({
                success:false,
                message:"NOT_FOUND"
            })}
            const matchEmail = await usersModel.findOne({email:value.email})
             if(matchEmail){
            return res.status(500).send({
                success:false,
                message:"Email already exist"
            })}
            //criptografia
            const salt = bcrypt.genSaltSync(10)
            //has of password
            const hasdPassword = await bcrypt.hash(value.password,salt)
            //save into database
            await usersModel.create({
                name:value.name,
                email:value.email,
                password:hasdPassword,
                address:value.address,
                role:value.role
            });
           res.status(200).send({
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
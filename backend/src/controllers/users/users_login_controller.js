const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const usersModel = require('../../models/usersModel')
//controller login
const loginController = async (req, res)=>{
 try {
    //reading data
    const {email,password} = req.body
    //validation
    if(!email || !password){
        return res.status(500).send({
            success:false,
            message:"provide login or email "
        })
    }
    //validation os user, just email is verify
    const user = await usersModel.findOne({email})
    if(!user){
        return res.status(404).send({
            success:false,
            message:"login or password is incorrect"
        })
    }
    //Recursos de descryptography
    //check user password | compare password
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
         res.status(500).send({
        success:false,
        message:"Invalid Credentials"
      })
    }
    const token = JWT.sign({id:user._id}, process.env.JWT_SECRET,{
        expiresIn:"7d"
    })
    res.status(200).send({
        success:true,
        message:"Success login",
        token,
        user
    })
 } catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:"Error in API Login"
    })
 }
}

module.exports = loginController
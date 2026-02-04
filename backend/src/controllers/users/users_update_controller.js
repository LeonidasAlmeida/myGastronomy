const usersModel = require('../../models/usersModel');
const bcrypt = require('bcryptjs');
const user_update_controller = async (req,res) =>{
    try {
        const {name, password, email, address} = req.body; 
        const {id} = req.params

         if(!id){
            return res.status(400).send({
                success:false,
                message:"EMPTY ID"
            })
         }

          const matchId = await usersModel.findOne({_id:id})
          if(!matchId){
            return res.status(404).send({
                success:false,
                message:"NOT_FOUND"
            })
         }

         //salt password
         const salt = bcrypt.genSaltSync(10);
         //hasPassword
         const hastPassword = await bcrypt.hash(password,salt)
         //validations request body
         if(name) matchId.name = name;
         if(password) matchId.password = hastPassword;
         if(email) matchId.email = email;
         if(address) matchId.address = address;

         await matchId.save()

         res.status(200).send({
                success:true,
                message:"Successfully to update user!",
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = user_update_controller
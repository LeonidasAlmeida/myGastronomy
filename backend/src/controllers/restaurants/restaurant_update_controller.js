const restaurantModel = require('../../models/restaurantModel');
const restaurant_update_controller = async (req,res) =>{
    try {
        const {title,address} = req.body; 
        const {id} = req.params
         if(!id){
            return res.status(400).send({
                success:false,
                message:"EMPTY ID"
            })
         }
          const matchId = await restaurantModel.findOne({_id:id})
          if(!matchId){
            return res.status(404).send({
                success:false,
                message:"NOT_FOUND"
            })
         }

           const matchTitle = await restaurantModel.findOne({title:title})
                    if(matchTitle){
                   return res.status(500).send({
                       success:false,
                       message:"Title already exist"
                   })}

     
         if(title) matchId.title = title;
         if(address) matchId.address = address;

         await matchId.save()

         res.status(200).send({
                success:true,
                message:"Successfully to update restaurant!",
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = restaurant_update_controller
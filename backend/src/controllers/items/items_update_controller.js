const itemsModel = require("../../models/itemsModel");
const item_update_controller = async (req,res) =>{
    try {
        const {name,price,image,description,category} = req.body; 
        const {id} = req.params

         if(!id){
            return res.status(400).send({
                success:false,
                message:"EMPTY ID"
            })
         }

          const matchId = await itemsModel.findOne({_id:id})
          if(!matchId){
            return res.status(404).send({
                success:false,
                message:"NOT_FOUND"
            })
         }

         //validations request body
         if(name) matchId.name = name;
         if(price) matchId.price = price;
         if(image) matchId.image = image;
         if(category) matchId.category = category;
         if(description) matchId.description = description
         await matchId.save()

         res.status(200).send({
                success:true,
                message:"Successfully to update item!",
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = item_update_controller;
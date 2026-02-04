const categoryModel = require('../../models/categoryModel');
const category_update_controller = async (req,res) =>{
    try {
        const {title,restaurante} = req.body; 
        const {id} = req.params
         if(!id){
            return res.status(400).send({
                success:false,
                message:"EMPTY ID"
            })
         }
          const matchId = await categoryModel.findOne({_id:id})
          if(!matchId){
            return res.status(404).send({
                success:false,
                message:"NOT_FOUND"
            })
         }

           const matchTitle = await categoryModel.findOne({title:title})
                    if(matchTitle){
                   return res.status(500).send({
                       success:false,
                       message:"Title already exist"
                   })}

     
         if(title) matchId.title = title;
         if(restaurante) matchId.restaurante = restaurante;

         await matchId.save()

         res.status(200).send({
                success:true,
                message:"Successfully to update category!",
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR"
        })
    }
}
module.exports = category_update_controller
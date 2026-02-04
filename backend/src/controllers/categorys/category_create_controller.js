const categoryModel = require('../../models/categoryModel');
const categoryValidations = require('../../validations/categoryValidations');
const category_create_controller = async (req,res)=>{
    try {
        const {error,value} = categoryValidations.validate(req.body);
        if(error){
            return res.status(400).send({
                success:false,
                message:"NOT_FOUND"
            })}
            const matchTitle = await categoryModel.findOne({title:value.title})
             if(matchTitle){
            return res.status(500).send({
                success:false,
                message:"Title already exist"
            })}
            //save into database
            await categoryModel.create({
                title:value.title,
                restaurante:value.restaurante
            });
           res.status(200).send({
                success:true,
                message:"Successfully to create category!",
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"INTERNAL ERROR here"
        })
    }
}
module.exports = category_create_controller
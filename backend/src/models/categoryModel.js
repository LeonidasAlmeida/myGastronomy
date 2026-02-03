const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"]
    },
    restaurante:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"restaurante"
        
    }
},{
    timestamps:true
})
module.exports = mongoose.model("category",categorySchema)
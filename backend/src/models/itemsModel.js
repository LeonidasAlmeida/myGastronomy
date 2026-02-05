const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    price:{
        type:String
    },
    image:{
        type:String,
        default:"https://img.freepik.com/free-vector/hand-drawn-bandeja-paisa-illustration_23-2150638453.jpg?semt=ais_hybrid&w=740&q=80"
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    }
},{timestamps:true})
module.exports = mongoose.model("items",itemSchema)
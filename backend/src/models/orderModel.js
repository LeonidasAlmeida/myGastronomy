const mongoose = require('mongoose');
const orderModel = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"]
    },  
    orderItems:{
        type:Array,
        required:[true,"item is required"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
},{timestamps:true})
module.exports = mongoose.model("orders",orderModel)
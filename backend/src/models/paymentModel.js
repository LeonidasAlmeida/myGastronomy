const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema({
    typeName:{
        type:String,
        required:[true,"typeName is required"]
    }
},{timestamps:true})
module.exports = mongoose.model("payment",paymentSchema);
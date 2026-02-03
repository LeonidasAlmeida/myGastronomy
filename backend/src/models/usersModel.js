const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    email:{
        type:String,
        required:[true,'Email is required']
    },
    address:{
        type:Array,
        required:[true,'address is required']
    },
    historic:{
        type:Array
    },
    favorite:{
        type:Array
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
},{timestamps:true})
module.exports = mongoose.model("users",userSchema);
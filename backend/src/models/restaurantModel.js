const mongoose = require('mongoose');
const restaurantSchema  = new mongoose.Schema({ 
    title:{
        type:String,
        required:[true,'title is required']
    },
    address:{
        type:Array,
        required:[true,'address is required']
    }
  },{timestamps:true}
)
module.exports = mongoose.model('restaurante',restaurantSchema);
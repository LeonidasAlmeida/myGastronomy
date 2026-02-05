const joi = require('joi');
const orderValidation = joi.object({
    title:joi.string().min(3).required(),
    orderItems:joi.array().required(),
    user:joi.string().required()
})
module.exports = orderValidation
const joi = require('joi');
const itemValidations = joi.object({
    name:joi.string().min(3).required(),
    price:joi.string().required(),
    image:joi.string().optional(),
    description:joi.string().min(10).optional(),
    category:joi.string().required()
})
module.exports = itemValidations;
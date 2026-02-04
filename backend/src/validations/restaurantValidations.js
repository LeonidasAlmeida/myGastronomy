const joi = require("joi");
const restaurantValidations = joi.object({
    title:joi.string().min(3).required(),
    address:joi.array().required(),
})
module.exports = restaurantValidations
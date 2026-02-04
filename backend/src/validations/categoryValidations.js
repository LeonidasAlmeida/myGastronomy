const joi = require("joi");
const categoryValidations = joi.object({
    title:joi.string().min(3).required(),
    restaurante:joi.string().required(),
})
module.exports = categoryValidations
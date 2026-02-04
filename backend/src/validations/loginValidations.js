const joi = require("joi");
const loginValidations = joi.object({
    name:joi.string().min(3).required(),
    email:joi.string().email().required(),
    password:joi.string().min(6).required(),
    address:joi.array().required(),
    role:joi.string().required()
})
module.exports = loginValidations
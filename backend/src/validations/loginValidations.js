const joi = require("joi");
const loginValidations = joi.object({
    name:joi.string().min(3).required(),
    email:joi.string().email().requred(),
    password:joi.string().min(6).required(),
    address:joi.string().requred(),
    role:joi.string().required()
})
module.exports = loginValidations
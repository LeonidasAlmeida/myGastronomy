const jwt = require('jsonwebtoken');
const createJWT = (_id)=>{
    try {
       const token = jwt.sign({id:_id},process.env.JWT_SECRET,{expiresIn:"7d"})
       return token;
    } catch (error) {
        console.error(error)
    }
}
module.exports = createJWT;
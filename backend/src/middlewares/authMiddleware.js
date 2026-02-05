const jwt = require('jsonwebtoken');
const authMiddleware = async(req,res,next)=>{
    try {
        const token = req.headers["authorization"].split(" ")[1]
        jwt.verify(token,process.env.JWT_SECRET,(error,decode))
        if(error){
            return res.status(401).send({
                success:false,
                message:"UN_AUTHORIZED USER"
            })
        }else{
            req.user = decode
            next()
        }
    } catch (error) {
        req.user = decode
    }
}
module.exports = authMiddleware;
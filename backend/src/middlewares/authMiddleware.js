const jwt = require('jsonwebtoken');
const authMiddleware = async(req,res,next)=>{
    try {
        const token = req.headers["authorization"].split(" ")[1]
        jwt.verify(token,process.env.JWT_SECRET,(error, decode)=>{
            if(error){
            return res.status(401).send({
                success:false,
                message:"UN_AUTHORIZED USER"
            })
        }else{
            req.user = decode
            next()
        }
    })
    } catch (error) {
        res.status(500).send({success:false,message:"Error of auth"})
    }
}
module.exports = authMiddleware;
const errorMiddleware = (error,req,res,next)=>{
    console.log(error);
    res.status(500).send({
        success:false,
        message:'INTERNAL_ERROR_API'
    })
}
module.exports = errorMiddleware;
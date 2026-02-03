const testController =(req,res)=>{
    try {
       return res.status(200).send({
        success:true,
        message:"Successfully test"
       })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"INTERNAL ERROR SERVER"
        })
    }
}
module.exports = testController;
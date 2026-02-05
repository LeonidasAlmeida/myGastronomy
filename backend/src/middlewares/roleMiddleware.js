const usersModel = require("../models/usersModel");
const roleMiddleware = async (req,res,next)=>{
    try {
        const userId = req.params.id
        console.log(userId)
        const user = await usersModel.findById(userId)
        if(!user || user.role !=='admin'){
            return resStatus(res,403,false,'Acesso negado')
        }
        next()
    } catch (error) {
        resStatus(res,500,false,'Não user não autorizado')
    }
}

module.exports = roleMiddleware
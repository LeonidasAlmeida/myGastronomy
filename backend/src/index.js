import express from "express"
import cors from "cors"
import morgana from "morgana"
import colors from "colors"
async function main() {
    const hostname = 'localhost'
    const port = 8080

    const app = express()

    app.use(express.json())
    app.use(cors())
    app.use(morgana("dev"))

    app.get('/',(req, res)=>{
        res.send({
            success:true,
            message:"Wellcome to MyGastronomy!",
            statusCode:200,
        })
    })
    app.listen(port,()=>{
        console.log(`Server running on: http://${hostname}:port=${port}`)
    })
}
main()
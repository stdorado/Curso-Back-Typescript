import express from "express"
import cors from "cors"
import AccountRouter from "./router/auth.routes.js"
import DB from "./config/db.config.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/api",AccountRouter)
const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log("Service on Port 4000")
})

import express from "express"
import cors from "cors"
import multer from "multer"
import upload from "multer"
const app = express()

app.use(cors())
const PORT = process.env.PORT || 4000

app.post("/api/file", m)

app.listen(PORT,()=>{
    console.log(`Puerto en ejecucion ${PORT}`)
})
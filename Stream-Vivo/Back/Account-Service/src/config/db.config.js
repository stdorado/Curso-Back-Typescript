import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()


const DB = mongoose.connect(process.env.MONGOOSE_URI)
.then(()=>{
    console.log("Conexion exitosa from DB")
}).catch((err)=>{
    console.log("error to conexion")
})

export default DB
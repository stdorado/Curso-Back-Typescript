import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()



export function generateToken(){
    const payload = {
        username : user.username,
        email : user.email,
        first_name : user.first_name,
        last_name : user.last_name
    };

    const ExpireToken ={expiresIn : '1h'};


   return jwt.sign(payload,"JTW-500",ExpireToken)

}

export function verifyToken(token){
    try {
        const decoded = jwt.verify(token,"JTW-500")
        return decoded
    } catch (error) {
        console.error(error)
        return null;
    }
}


import { Router  } from "express";
import { RegisterController,LoginController,GetProfileController } from "../controller/account.controller.js";
const auth = Router()

auth.get("/profile",GetProfileController)
auth.post("/register", RegisterController)
auth.post("/login",LoginController)

export default auth;
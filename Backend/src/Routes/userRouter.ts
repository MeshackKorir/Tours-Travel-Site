import { Router } from "express";
import { signupController } from "../Controller/signup.controller";
import { loginController } from "../Controller/login.controller";
const user_router = Router();

user_router.post("/register", signupController);
user_router.post("/login", loginController);


export default user_router;
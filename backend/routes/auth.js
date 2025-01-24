import { Signin, Signup } from "../controllers/auth.js";
import express from "express"
const router=express.Router()


router.post('/signin',Signin);

router.post('/signup',Signup);

export default router

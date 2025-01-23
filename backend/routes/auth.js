import { Signin } from "../controllers/auth";
import { Signup } from "../controllers/auth";
import express from express
const router=express.Router()


router.post('/signin',Signin);
router.post('/signup',Signup);


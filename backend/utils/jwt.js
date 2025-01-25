import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();


export const generateToken=(payload)=>{
    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'10m'})
}


export const verifyToken=(token)=>{
    try {
        const decoded = jwt.verify(token, JWT_SECRET); 
        return decoded;
    } catch (error) {
        throw new Error('Invalid token');
    }
}
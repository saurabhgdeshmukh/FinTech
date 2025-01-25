import { verifyToken } from "../utils/jwt";


export const authMiddleware =async(req,re,next)=>{
    const token=req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
      }
    
      try {
        const decoded = verifyToken(token); 
        console.log('Authorization Header:', decoded);
        next();
      } catch (err) {
        res.status(401).json({ err });
      }
  

}
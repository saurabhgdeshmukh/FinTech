import { NextApiRequest, NextApiResponse } from "next";
import { verifyToken } from "../utils/jwt";

export const authMiddleware = async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = verifyToken(token);
    if (!decoded) throw new Error("Invalid token");

    console.log("Authorization Header:", decoded);
    next(); // Proceed to the next handler
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

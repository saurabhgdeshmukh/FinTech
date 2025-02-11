import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { FindUserByEmail } from "../model/User";
import { generateToken } from "../utils/jwt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { Email, Password } = req.body;

  if (!Email || !Password) {
    return res.status(400).json({ error: "Please provide email and password." });
  }

  try {
    let user = await FindUserByEmail(Email);

    if (!user || (Array.isArray(user) && user.length === 0)) {
      return res.status(400).json({ error: "User not found." });
    }

    if (Array.isArray(user)) {
      user = user[0]; // Extract user object if it's an array
    }

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials." });
    }

    const token = generateToken({ Email });

    res.status(200).json({
      message: "Login successful.",
      token,
      Email,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Server error." });
  }
}

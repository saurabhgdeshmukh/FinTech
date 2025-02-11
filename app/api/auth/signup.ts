import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { CreateUser, FindUserByEmail } from "@/model/User";
import { generateToken } from "@/utils/jwt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    FirstName,
    LastName,
    Address,
    State,
    PostalCode,
    DOB,
    SSN,
    Email,
    Password,
  } = req.body;

  if (
    !FirstName ||
    !LastName ||
    !Address ||
    !State ||
    !PostalCode ||
    !DOB ||
    !SSN ||
    !Email ||
    !Password
  ) {
    return res.status(400).json({ error: "Please provide all required fields." });
  }

  try {
    const user = await FindUserByEmail(Email);
    if (user.length > 0) {
      return res.status(400).json({ error: "User with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    await CreateUser({
      FirstName,
      LastName,
      Address,
      State,
      PostalCode,
      DOB,
      SSN,
      Email,
      Password: hashedPassword,
    });

    res.status(201).json({ message: "Signup successful." });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Server error." });
  }
}

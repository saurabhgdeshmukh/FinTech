import bcrypt from "bcryptjs";
import { CreateUser, FindUserByEmail } from "../model/User.js";
import { generateToken } from "../utils/jwt.js";

export const Signup = async (req, res) => {
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
    return res
      .status(400)
      .json({ error: "Please provide all required fields." });
  }
  try {
    const user = await FindUserByEmail(Email); 
    if (user.length > 0) {
      return res
        .status(400)
        .json({ error: "User with this email already exists." });
    }
    const hashedPassword = await bcrypt.hash(Password, 10);
    const newUser = await CreateUser(
      FirstName,
      LastName,
      Address,
      State,
      PostalCode,
      DOB,
      SSN,
      Email,
      hashedPassword 
    );
    res.status(201).json({
      message: "Signup successful.",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Server error." });
  }
};

export const Signin = async (req, res) => {
    const { Email, Password } = req.body;
  
    if (!Email || !Password) {
      return res
        .status(400)
        .json({ error: "Please provide email and password." });
    }
  
    try {
      let user = await FindUserByEmail(Email);
  
      if (!user || (Array.isArray(user) && user.length === 0)) {
        return res.status(400).json({ error: "User not found." });
      }
  
      // If user is an array, get the first element
      if (Array.isArray(user)) {
        user = user[0];
      }
  
      console.log("Retrieved user:", user); // Debugging
  
    //   if (!user.Password) {
    //     return res.status(500).json({ error: "Password not found for this user." });
    //   }
  
      const isMatch = await bcrypt.compare(Password, user.data.Password);
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid credentials." });
      }
  
      const token = generateToken({ Email: Email });
      res.status(200).json({
        message: "Login successful.",
        Email: Email,
      });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Server error." });
    }
  };
  

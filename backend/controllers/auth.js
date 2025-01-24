import bcrypt from "bcryptjs";
import { CreateUser, FindUserByEmail } from "../model/User.js";

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
      .json({ error: "Please provide email and password." });
  }
  try {
    const user = FindUserByEmail(Email);
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
      Password
    );
    res.status(201).json({
        message: 'Signup successful.',
      });
  } catch (error) {
    console.error("Error creating user:", err);
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
    const user = await FindUserByEmail(Email);

    if (user.length === 0) {
      return res.status(400).json({ error: "User not found." });
    }
    console.log(user)
    const isMatch = await bcrypt.compare(Password, user.data.Password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials." });
    }
    res.status(200).json({
      message: "Login successful.",
    });
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
};

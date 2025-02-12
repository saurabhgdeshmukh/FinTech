import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { FindUserByEmail } from "@/app/model/User";
import { generateToken } from "../../../utils/jwt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { Email, Password } = body;

    if (!Email || !Password) {
      return NextResponse.json({ error: "Please provide email and password." }, { status: 400 });
    }

    let user = await FindUserByEmail(Email);
    console.log(user.data)
    if (!user || !user.data) {
      return NextResponse.json({ error: "User not found." }, { status: 400 });
    }
    console.log(user)
    user = user.data; // Extract user if it's an array
    console.log(user)
    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 400 });
    }

    const token = generateToken({ Email });

    return NextResponse.json({
      message: "Login successful.",
      token,
      Email,
    }, { status: 200 });

  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { CreateUser, FindUserByEmail } from "../../model/User";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { FirstName, LastName, Address, State, PostalCode, DOB, SSN, Email, Password } = body;

    if (!FirstName || !LastName || !Address || !State || !PostalCode || !DOB || !SSN || !Email || !Password) {
      return NextResponse.json({ error: "Please provide all required fields." }, { status: 400 });
    }

    const user = await FindUserByEmail(Email);
    if (user.length > 0) {
      return NextResponse.json({ error: "User with this email already exists." }, { status: 400 });
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

    return NextResponse.json({ message: "Signup successful." }, { status: 201 });

  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

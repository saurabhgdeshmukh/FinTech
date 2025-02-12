import { NextResponse } from "next/server";
import { CreateUser, FindUserByEmail } from "../../../model/User";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { FirstName, LastName, Address, State, PostalCode, DOB, SSN, Email, Password } = body;

        if (!FirstName || !LastName || !Address || !State || !PostalCode || !DOB || !SSN || !Email || !Password) {
            return NextResponse.json({ error: "Please provide all required fields." }, { status: 400 });
        }

        // Check if user already exists
        const existingUser = await FindUserByEmail(Email);
        if (existingUser.success) {
            return NextResponse.json({ error: "User already exists." }, { status: 400 });
        }

        // Create the user
        const result = await CreateUser(FirstName, LastName, Address, State, PostalCode, DOB, SSN, Email, Password);
        if (!result.success) {
            return NextResponse.json({ error: result.error }, { status: 500 });
        }

        return NextResponse.json({ message: "Signup successful." }, { status: 201 });
    } catch (error) {
        console.error("Error in signup:", error);
        return NextResponse.json({ error: "Server error." }, { status: 500 });
    }
}

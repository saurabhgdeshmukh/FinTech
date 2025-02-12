import bcrypt from 'bcrypt';
import db from '../lib/db';

export const CreateUser = async (
    FirstName: string,
    LastName: string,
    Address: string,
    State: string,
    PostalCode: string,
    DOB: string,
    SSN: string,
    Email: string,
    Password: string
) => {
    try {
        // Hash the password before inserting it into the database
        const hashedPassword = await bcrypt.hash(Password, 10);

        const query = `
            INSERT INTO "User" 
            ("FirstName", "LastName", "Address", "State", "PostalCode", "DOB", "SSN", "Email", "Password") 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        `;
        
        // Use parameterized queries with pg
        await db.query(query, [FirstName, LastName, Address, State, PostalCode, DOB, SSN, Email, hashedPassword]);

        return { success: true, message: "User created successfully." };
    } catch (error) {
        console.error("Error creating user:", error);
        return { success: false, error: "Failed to create user." };
    }
};

export const FindUserByEmail = async (Email: string) => {
    try {
        const query = 'SELECT * FROM "User" WHERE "Email" = $1';
        const res = await db.query(query, [Email]);
        
        if (res.rows.length > 0) {
            return { success: true, data: res.rows[0] }; // Return the user if found
        }

        return { success: false, error: "User Not Found." };
    } catch (error) {
        console.error("Error finding user by email:", error);
        return { success: false, error: "Error searching for user." };
    }
};
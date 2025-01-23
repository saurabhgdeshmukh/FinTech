import db from "../db/db.js";

export const CreateUser = async (FirstName, LastName, Address, State, PostalCode, DOB, SSN, Email, Password) => {
    try {
        const query = `
            INSERT INTO User 
            (FirstName, LastName, Address, State, PostalCode, DOB, SSN, Email, Password) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        await db.execute(query, [FirstName, LastName, Address, State, PostalCode, DOB, SSN, Email, Password]);
        
        return { success: true, message: "User created successfully." };
    } catch (error) {
        console.error("Error creating user:", error);
        return { success: false, error: "Failed to create user." };
    }
};

export const FindUserByEmail = async (Email) => {
    try {
        const [rows] = await db.query('SELECT * FROM User WHERE Email = ?', [Email]);
        
        return { success: true, data: rows };
    } catch (error) {
        console.error("Error finding user by email:", error);
        return { success: false, error: "User Not Found." };
    }
};

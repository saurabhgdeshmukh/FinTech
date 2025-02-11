import db from "@/utils/db";

// Define TypeScript interface for User
export interface User {
  FirstName: string;
  LastName: string;
  Address: string;
  State: string;
  PostalCode: string;
  DOB: string;
  SSN: string;
  Email: string;
  Password: string;
}

export const FindUserByEmail = async (email: string): Promise<User[]> => {
  const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows;
};

export const CreateUser = async (userData: User): Promise<void> => {
  const { FirstName, LastName, Address, State, PostalCode, DOB, SSN, Email, Password } = userData;

  await db.query(
    "INSERT INTO users (FirstName, LastName, Address, State, PostalCode, DOB, SSN, Email, Password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
    [FirstName, LastName, Address, State, PostalCode, DOB, SSN, Email, Password]
  );
};

import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  ssl: {
    rejectUnauthorized: false, 
  },
});

db.connect()
  .then(() => console.log("Connected to PostgreSQL database."))
  .catch((err) => console.error("Database connection error:", err));

db.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

export default db;

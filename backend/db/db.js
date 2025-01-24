import  Pool  from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const db = new Pool.Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false, 
    },
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
  });

db.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
  });

export default db;

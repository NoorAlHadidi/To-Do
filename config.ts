import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const connection = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});

connection.connect().then(() => {
    console.log("Connected to the database successfully.");
}).catch((error) => {
    console.error("Database connection error:", error.stack);
});

export default connection;
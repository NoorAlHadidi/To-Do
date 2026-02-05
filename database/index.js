import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema.js";
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
    connectionString: process.env.DB_CONNECTION_STRING,
});

export const database = drizzle(pool, {
    schema,
    logger: true, // to log all SQL queries
});

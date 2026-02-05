/*
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
});

const database = drizzle({ client: pool });

export default database;
*/

import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  schema: "./database/schema.js",
  out: "./datase/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DB_CONNECTION_STRING,
  },
  verbose: true, // to log generated SQL queries (tell us what will change when migrating)
  strict: true, // security precaution for migrations (prevent major changes without confirmation)
});
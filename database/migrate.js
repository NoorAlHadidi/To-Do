/*
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

const migrationClient = postgres(process.env.DB_CONNECTION_STRING, { max: 1 });

async function main() {
    await migrate(drizzle(migrationClient), { migrationsFolder: "./database/migrations" });
    await migrationClient.end();
}

main();
*/

// above code is for postgres-js, below is for node-postgres (pg)

import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DB_CONNECTION_STRING,
});

async function main() {
    const database = drizzle(pool);
    await migrate(database, { migrationsFolder: "./database/migrations" });
    await pool.end();
}

main();

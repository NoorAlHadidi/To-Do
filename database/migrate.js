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

import { migrate } from "drizzle-orm/node-postgres/migrator";
import { database, pool } from "./index.js";

async function main() {
    await migrate(database, { migrationsFolder: "./database/migrations" });
    await pool.end();
}

main();


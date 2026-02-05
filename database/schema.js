import { boolean, timestamp } from "drizzle-orm/gel-core";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const ToDoTable = pgTable("todo-drizzle", {
    id: serial("id").primaryKey(),
    text: varchar("text").notNull(),
    isDone: boolean("is_done").notNull().default(false),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});

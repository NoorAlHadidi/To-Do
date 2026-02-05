import { pgTable, serial, varchar, boolean, timestamp } from "drizzle-orm/pg-core";

export const ToDoTable = pgTable("todo_drizzle", {
    id: serial("id").primaryKey(),
    text: varchar("text").notNull(),
    isDone: boolean("is_done").notNull().default(false),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});

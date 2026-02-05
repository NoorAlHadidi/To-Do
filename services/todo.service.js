import { database } from "../database/index.js";
import { ToDoTable } from "../database/schema.js";
import { eq, desc, not } from "drizzle-orm";

export async function saveTodo(text) {
    const newTodo = await database.insert(ToDoTable).values({ text: text })
    .returning({ id: ToDoTable.id, text: ToDoTable.text, isDone: ToDoTable.isDone, createdAt: ToDoTable.createdAt });
    return newTodo[0];
}

export async function getSingleTodo(id) {
    const todo = await database.select().from(ToDoTable).where(eq(ToDoTable.id, id));
    if (todo.length === 0) {
        return null;
    }
    return todo[0];
}

export async function getAllTodos() {
    const todos = await database.select().from(ToDoTable).orderBy(desc(ToDoTable.createdAt));
    return todos;
}

export async function modifyTodo(id, newText) {
    const todo = await database.update(ToDoTable).set({ text: newText }).where(eq(ToDoTable.id, id))
    .returning({ id: ToDoTable.id, text: ToDoTable.text, isDone: ToDoTable.isDone, createdAt: ToDoTable.createdAt });
    if (todo.length === 0) {
        return null;
    }
    return todo[0];
}

export async function changeTodo(id) {
    const todo = await database.update(ToDoTable).set({ isDone: not(ToDoTable.isDone) }).where(eq(ToDoTable.id, id))
    .returning({ id: ToDoTable.id, text: ToDoTable.text, isDone: ToDoTable.isDone, createdAt: ToDoTable.createdAt });
    if (todo.length === 0) {
        return null;
    }
    return todo[0];
}

export async function removeTodo(id) {
    const todo = await database.delete(ToDoTable).where(eq(ToDoTable.id, id)).returning({ id: ToDoTable.id });
    if (todo.length === 0) {
        return null;
    }
    return todo[0];
}

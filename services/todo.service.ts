import connection from "../config";
import type { addTodo } from "../schemas/zod.schemas";
import { Todo } from "../interfaces/todo.interface";

export async function saveTodo(text: addTodo): Promise<Todo> {
    const query = "INSERT INTO todo_items (text) VALUES ($1) RETURNING *;";
    const values = [text.text];
    const result = await connection.query(query, values);
    const row = result.rows[0];
    return {
        id: row.id,
        text: row.text,
        done: row.done,
        createdAt: row.created_at
    };
}

export async function getSingleTodo(id: number): Promise<Todo | null> {
    const query = "SELECT * FROM todo_items WHERE id = $1;";
    const values = [id];
    const result = await connection.query(query, values);
    if (result.rows.length === 0) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row.id,
        text: row.text,
        done: row.done,
        createdAt: row.created_at
    };
}

export async function getAllTodos(): Promise<Todo[]> {
    const query = "SELECT * FROM todo_items ORDER BY created_at DESC;";
    const result = await connection.query(query);
    return result.rows.map(row => ({
        id: row.id,
        text: row.text,
        done: row.done,
        createdAt: row.created_at
    }));
}

export async function modifyTodo(id: number, newText: addTodo): Promise<Todo | null> {
    const query = "UPDATE todo_items SET text = $1 WHERE id = $2 RETURNING *;";
    const values = [newText.text, id];
    const result = await connection.query(query, values);
    if (result.rows.length === 0) {
        return null;
    }
    return {
        id: result.rows[0].id,
        text: result.rows[0].text,
        done: result.rows[0].done,
        createdAt: result.rows[0].created_at
    };
}

export async function changeTodo(id: number): Promise<Todo | null> {
    const query = "UPDATE todo_items SET done = NOT done WHERE id = $1 RETURNING *;";
    const values = [id];
    const result = await connection.query(query, values);
    if (result.rows.length === 0) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row.id,
        text: row.text,
        done: row.done,
        createdAt: row.created_at
    };
}

export async function removeTodo(id: number): Promise<Todo | null> {
    const query = "DELETE FROM todo_items WHERE id = $1 RETURNING *;";
    const values = [id];
    const result = await connection.query(query, values);
    if (result.rows.length === 0) {
        return null;
    }
    const row = result.rows[0];
    return {
        id: row.id,
        text: row.text,
        done: row.done,
        createdAt: row.created_at
    };
}

import connection from "../config.js";

export async function saveTodo(text) {
    const query = "INSERT INTO todo_items (text) VALUES ($1) RETURNING *;";
    const values = [text];
    const result = await connection.query(query, values);
    return {
        id: result.rows[0].id,
        text: result.rows[0].text,
        done: result.rows[0].done,
        createdAt: result.rows[0].created_at
    };
}

export async function getSingleTodo(id) {
}

export async function getAllTodos() {
}

export async function modifyTodo(id, newText) {
}

export async function changeTodo(id) {
}

export async function removeTodo(id) {
}

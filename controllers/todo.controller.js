import { saveTodo, getSingleTodo, getAllTodos, modifyTodo, changeTodo } from "../services/todo.service.js";

export async function addTodo(req, res) {
    try {
        const { text } = req.body;
        const newTodo = await saveTodo(text);
        return res.status(201).json(newTodo);
    } catch (error) {
        return res.status(500).json({ message: "Failed to add todo." });
    }
}

export async function getTodo(req, res) {
    try {
        const id = Number(req.params.id);
        const todo = await getSingleTodo(id);
        if (!todo) {
            return res.status(404).json({ message: "No todo with that ID exists." })
        }
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json({ message: "Failed to get todo." });
    }
}

export async function getTodos(req, res) {
    try {
        const todos = await getAllTodos();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Failed to get todos." });
    }
}

export async function updateTodo(req, res) {
    try {
        const id = Number(req.params.id);
        const { text } = req.body;ß
        await modifyTodo(id, text);
        return res.sendStatus(200)
    } catch (error) {
        console.error("Error updating todo:", error);
        return res.status(500).json({ message: "Failed to update todo." });    
    }
}

export async function markTodo(req, res) {
    try {
        const id = Number(req.params.id);
        await changeTodo(id);
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({ message: "Failed to mark todo." });    
    }
}   

export function deleteTodo(req, res) {
    return res.status(204).json({ message: "Deleting To-Do" });
}

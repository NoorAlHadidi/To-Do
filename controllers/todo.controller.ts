import type { Request, Response } from "express";
import { 
    saveTodo,
    getSingleTodo,
    getAllTodos,
    modifyTodo,
    changeTodo,
    removeTodo
} from "../services/todo.service.ts";
import { addTodoSchema } from "../schemas/zod.schemas.ts";

export async function addTodo(req: Request, res: Response) {
    const text = addTodoSchema.safeParse(req.body);
    if (!text.success) {
        return res.status(400).json({message: text.error.issues[0].message});
    }
    try {
        const newTodo = await saveTodo(text.data);
        return res.status(201).json(newTodo);
    } catch (error) {
        return res.status(500).json({ message: "Failed to add todo." });
    }
}

export async function getTodo(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const todo = await getSingleTodo(65);
        if (!todo) {
            return res.status(404).json({ message: "No todo with that ID exists." })
        }
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json({ message: "Failed to get todo." });
    }
}

export async function getTodos(req: Request, res: Response) {
    try {
        const todos = await getAllTodos();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Failed to get todos." });
    }
}

export async function updateTodo(req: Request, res: Response) {
    const text = addTodoSchema.safeParse(req.body);
    if (!text.success) {
        return res.status(400).json({message: text.error.issues[0].message});
    }
    try {
        const id = Number(req.params.id);
        const todo = await modifyTodo(id, text.data);
        if (!todo) {
            return res.status(404).json({ message: "No todo with that ID exists." })
        }
        return res.status(200).json(todo);
    } catch (error) {
        console.error("Error updating todo:", error);
        return res.status(500).json({ message: "Failed to update todo." });    
    }
}

export async function markTodo(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const todo = await changeTodo(id);
        if (!todo) {
            return res.status(404).json({ message: "No todo with that ID exists." })
        }
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json({ message: "Failed to mark todo." });    
    }
}   

export async function deleteTodo(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const todo = await removeTodo(id);
        if (!todo) {
            return res.status(404).json({ message: "No todo with that ID exists." })
        }
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Failed to delete todo." });    
    }
}
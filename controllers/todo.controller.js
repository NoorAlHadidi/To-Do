import { 
    saveTodo, 
    getSingleTodo, 
    getAllTodos, 
    modifyTodo, 
    changeTodo, 
    removeTodo 
} from "../services/todo.service.js";

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
        const { text } = req.body;
        const todo = await modifyTodo(id, text);
        if (!todo) {
            return res.status(404).json({ message: "No todo with that ID exists." })
        }
        return res.status(200).json(todo);
    } catch (error) {
        console.error("Error updating todo:", error);
        return res.status(500).json({ message: "Failed to update todo." });    
    }
}

export async function markTodo(req, res) {
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

export async function deleteTodo(req, res) {
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

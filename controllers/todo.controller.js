import { getAllTodos } from "../services/todo.service.js";

export function addTodo(req, res) {
  return res.status(201).json({ message: "Adding To-Do" });
}

export function getTodo(req, res) {
  return res.status(200).json({ message: "To-Do" });
}

export async function getTodos(req, res) {
  try {
    const todos = await getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to get todos." });
  }
}

export function updateTodo(req, res) {
  return res.status(200).json({ message: "Updating To-Do" });
}

export function markTodo(req, res) {
  return res.status(200).json({ message: "Marking To-Do" });
}   

export function deleteTodo(req, res) {
  return res.status(204).json({ message: "Deleting To-Do" });
}

export function addTodo(req, res) {
  return res.status(201).json({ message: "Adding To-Do" });
}

export function getTodo(req, res) {
  return res.status(200).json({ message: "To-Do" });
}

export function getTodos(req, res) {
  return res.status(200).json({ message: "To-Dos" });
}

export function updateTodo(req, res) {
  return res.status(200).json({ message: "Updating To-Do" });
}

export function deleteTodo(req, res) {
  return res.status(204).json({ message: "Deleting To-Do" });
}

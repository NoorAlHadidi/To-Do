import fs from "fs/promises";

const DATA_PATH = "./data/todos.json";

export async function getAllTodos() {
  const data = await fs.readFile(DATA_PATH, "utf-8");
  const todos = JSON.parse(data);
  return todos;
}

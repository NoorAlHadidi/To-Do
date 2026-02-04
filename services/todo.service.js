import fs from "fs/promises";

const DATA_PATH = "./data/todos.json";

export async function saveTodo(text) {
    const todos = await getAllTodos();
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = {
        id: newId,
        text: text,
        done: false,
        createdAt: new Date().toISOString(),
  };
  todos.push(newTodo);
  await fs.writeFile(DATA_PATH, JSON.stringify(todos, null, 2));
  return newTodo;
}

export async function getSingleTodo(id) {
    const todos = await getAllTodos();
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
        return null;
    }
    return todo;
}

export async function getAllTodos() {
    const data = await fs.readFile(DATA_PATH, "utf-8");
    const todos = JSON.parse(data);
    return todos;
}

export async function modifyTodo(id, newText) {
    const todos = await getAllTodos();
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
        return null;
    }
    todo.text = newText;
    await fs.writeFile(DATA_PATH, JSON.stringify(todos, null, 2));
    return todo;
}

export async function changeTodo(id) {
    const todos = await getAllTodos();
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
        return null;
    }
    todo.done = !todo.done;
    await fs.writeFile(DATA_PATH, JSON.stringify(todos, null, 2));
    return todo;
}

export async function removeTodo(id) {
    const todos = await getAllTodos();
    const deletedTodo = todos.find((todo) => todo.id === id);
    if (!deletedTodo) {
        return null;
    }
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    await fs.writeFile(DATA_PATH, JSON.stringify(filteredTodos, null, 2));
    return deletedTodo;
}

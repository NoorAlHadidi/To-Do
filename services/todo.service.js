import database from '../database/config.js';

export async function saveTodo(text) {
    const todo = await database('todo_knex').insert({ title: text }).returning('*');
    return todo[0];
}

export async function getSingleTodo(id) {
    const todo = await database('todo_knex').where({ id });
    if (todo.length === 0) {
        return null;
    }
    return todo[0];
}

export async function getAllTodos() {
    const todos = await database('todo_knex').select('*');
    return todos;
}

export async function modifyTodo(id, newText) {
    const todo = await database('todo_knex').where({ id }).update({ title: newText }).returning('*');
    if (todo.length === 0) {
        return null;
    }
    return todo[0];
}

export async function changeTodo(id) {
    const todo = await database('todo_knex').where({ id }).update({done: database.raw('NOT done')}).returning('*');
    if (todo.length === 0) {
        return null;
    }
    return todo[0];
}

export async function removeTodo(id) {
    const todo = await database('todo_knex').where({ id }).del().returning('*');
    if (todo.length === 0) {
        return null;
    }
    return todo[0];
}

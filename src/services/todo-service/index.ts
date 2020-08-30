import { v4 as uuid } from "uuid";

import ToDo from "../../models/todo";

export default class ToDoService {

    todos: Array<ToDo> = [
        new ToDo(uuid(), 'aEGrgawe5rg'),
        new ToDo(uuid(), 'fq35rhwrt6', true),
        new ToDo(uuid(), 'gasdrfhw4e6h'),
    ];

    constructor() {}

    getTodos() {
        return this.todos;
    }

    addTodo(todo: ToDo) {
        this.todos.push(todo);
    }

    createTodo(title: string, isCompleted: boolean) {
        const todoId = uuid();
        const todo: ToDo = new ToDo(todoId, title, isCompleted);
        this.addTodo(todo);
        return todo;
    }

    delTodo(id: any) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

}

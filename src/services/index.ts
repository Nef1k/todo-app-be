import { createContainer, asClass, InjectionMode } from 'awilix';

import ToDoService from "./todo-service";

const container = createContainer({
    injectionMode: InjectionMode.PROXY
});

container.register({
    todoService: asClass(ToDoService)
});

export default container;

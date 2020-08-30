import container from "../../services";
import ToDoService from "../../services/todo-service";

const todoService: ToDoService = container.resolve('todoService');

export default {
    getTodos: (req: any, res: any) => {
        res.send(todoService.getTodos());
    },
    createTodo: (req: any, res: any) => {
        const title = req.body.title || '';
        const isCompleted = false;

        res.send(todoService.createTodo(title, isCompleted));
    },
    deleteTodo: (req: any, res: any) => {
        const id = req.params.id || '';
        todoService.delTodo(id);
        res.send();
    }
};

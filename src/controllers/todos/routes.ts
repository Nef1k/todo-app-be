import {Router} from "express";
import controllers from './index';

const routes = Router();

routes.get('/', controllers.getTodos);
routes.post('/', controllers.createTodo);
routes.delete('/:id', controllers.deleteTodo);

export default routes;

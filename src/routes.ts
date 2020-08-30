import { Router } from "express";
import todos from './controllers/todos/routes';
import common from './controllers/common/routes';

const routes = Router();

routes.use('/todos', todos);
routes.use('/common', common)

export default routes;

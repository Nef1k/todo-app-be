import {Router} from "express";
import common from './index';

const routes = Router();

routes.get('/health-check/', common.healthCheck);

export default routes;

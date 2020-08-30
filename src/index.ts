import bodyParser from "body-parser";
import express, {Express} from 'express';

import routes from './routes';

const hostname: string = process.env.WEB_HOST || 'localhost';
const port: number = parseInt(process.env.WEB_PORT || "8081", 10);

const app: Express = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, hostname, () => {
    console.log(`Server is running @ http://${hostname}:${port}`);
})

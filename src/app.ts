import * as express from "express";
import * as bodyParser from "body-parser";
import * as methodOverride from "method-override";

let app: express.Application = express();
app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(methodOverride());

app.get('/', (_req, res) => {
    res.send('Hello World!, how are you');
});

export default app;
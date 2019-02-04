import * as http from "http";
import app from "./app";

let port: number = process.env.PORT ? Number.parseInt(process.env.PORT): 3000;

http
    .createServer(app)
    .listen(port)
    .on('error', (error: NodeJS.ErrnoException) : void => {
        throw error;
    })
    .on('listening', (): void => {
        console.log('Listening on port ' + port);
    });

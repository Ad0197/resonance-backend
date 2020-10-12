import express, { Application, Response, Request, NextFunction } from 'express';

const app: Application = express();

const add: Function = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log(add(5, 5));
    res.send("hola");
    return;
});

app.listen(5000, () => {
    console.log("Server is listining in port 5000");
})
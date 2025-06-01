import express, { Application, Request, Response } from "express";
import { todosRouter } from "./app/todos/todos.routes";

const app: Application = express();

//middleware
app.use(express.json());

//Router
app.use("/todos", todosRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello New Express Developer !!!");
});

export default app;

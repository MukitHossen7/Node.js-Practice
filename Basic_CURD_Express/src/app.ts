import express, { Application, Request, Response } from "express";
import { todosRouter } from "./routes/todos.routes";

const app: Application = express();

//middleware
app.use(express.json());

//routing
app.use("/todos", todosRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("I do CRUD operation");
});

export default app;

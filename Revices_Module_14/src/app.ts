import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();
const filePath = path.join(__dirname, "../../db/todo.json");
const todoRouter = express.Router();

//middleware for user send data use this
app.use(express.json());
app.use("/", todoRouter);

todoRouter.get("/todos", (req: Request, res: Response) => {
  console.log("This is Todo Router");
  // const todo_data = fs.readFileSync(filePath, { encoding: "utf8" });
  res.json({ massage: "This is Todo Router" });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello New Express Developer !!!");
});

//get all todos data
app.get("/todos", (req: Request, res: Response) => {
  const todo_data = fs.readFileSync(filePath, { encoding: "utf8" });
  res.json(JSON.parse(todo_data));
});

//get single data use Params and Queries
app.get("/todo/:id/:title", (req: Request, res: Response) => {
  console.log(req.params);
  console.log(req.query);
  console.log("I am using Params and Queries");
  res.send("I am using Params and Queries");
});
//post single todo data
app.post("/todos/create", (req: Request, res: Response) => {
  const todoData = req.body;
  console.log(todoData);
  res.send("ADD a single Todo Data");
});
export default app;

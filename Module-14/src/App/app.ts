import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();
const filePath = path.join(__dirname, "../../db/todo.json");

//middleware for user send data use this
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello New Express Developer !!!");
});

//get all todos data
app.get("/todos", (req: Request, res: Response) => {
  const todo_data = fs.readFileSync(filePath, { encoding: "utf8" });
  res.json(JSON.parse(todo_data));
});

//post single todo data
app.post("/todos/create", (req: Request, res: Response) => {
  const todoData = req.body;
  console.log(todoData);
  res.send("ADD a single Todo Data");
});
export default app;

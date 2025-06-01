import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../../../db/todo.json");
export const todosRouter = express.Router();

//get all todos data
todosRouter.get("/", (req: Request, res: Response) => {
  const todo_data = fs.readFileSync(filePath, { encoding: "utf8" });
  res.json(JSON.parse(todo_data));
});

//post single todo data
todosRouter.post("/create", (req: Request, res: Response) => {
  const todoData = req.body;
  console.log(todoData);
  res.send("ADD a single Todo Data");
});

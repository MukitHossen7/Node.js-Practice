import express, { Request, Response } from "express";
import { client } from "../../db/mongodb";

export const todosRouter = express.Router();

//Collection
const todosCollection = client.db("todosDB").collection("todos");

//get all todos data
todosRouter.get("/", async (req: Request, res: Response) => {
  const data = await todosCollection.find().toArray();
  res.send(data);
});

//post single todo data
todosRouter.post("/create", async (req: Request, res: Response) => {
  const todoData = req.body;
  const data = await todosCollection.insertOne(todoData);
  res.send(data);
});

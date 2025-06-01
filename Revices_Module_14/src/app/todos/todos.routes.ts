import express, { Request, Response } from "express";
import { client } from "../../db/mongodb";
import { ObjectId } from "mongodb";

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

todosRouter.get("/:id", async (req: Request, res: Response) => {
  const todoId = req.params.id;
  const data = await todosCollection.findOne({ _id: new ObjectId(todoId) });
  res.send(data);
});

todosRouter.delete("/:id", async (req: Request, res: Response) => {
  const todoId = req.params.id;
  const data = await todosCollection.deleteOne({ _id: new ObjectId(todoId) });
  res.send(data);
});

todosRouter.put("/update-todo/:id", async (req: Request, res: Response) => {
  const todoId = req.params.id;
  const { title, description, completed, dueDate } = req.body;

  const filter = { _id: new ObjectId(todoId) };
  //   const options = { upsert: true };
  const updateDoc = {
    $set: {
      title: title,
      description: description,
      completed: completed,
      dueDate: dueDate,
    },
  };
  const data = await todosCollection.updateOne(filter, updateDoc);
  res.send(data);
});

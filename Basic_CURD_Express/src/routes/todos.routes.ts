import express, { Request, Response } from "express";
import { client } from "../db/mongodb";

//Single routing
export const todosRouter = express.Router();

//collection
const todosCollection = client.db("CRUD_DB").collection("todos");

todosRouter.get("/GET", async (req: Request, res: Response) => {
  const result = await todosCollection.find().toArray();
  res.send(result);
});

todosRouter.post("/", async (req: Request, res: Response) => {
  const body = req.body;
  const result = await todosCollection.insertOne(body);
  res.send(result);
});

import { Request, Response } from "express";
import { client } from "../db/mongodb";

//collection
const todosCollection = client.db("CRUD_DB").collection("todos");

export const getAllTodos = async (req: Request, res: Response) => {
  const result = await todosCollection.find().toArray();
  res.json(result);
};

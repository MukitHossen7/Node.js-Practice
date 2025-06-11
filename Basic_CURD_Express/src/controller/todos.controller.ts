import { Request, Response } from "express";
import { client } from "../db/mongodb";

//collection
const todosCollection = client.db("CRUD_DB").collection("todos");

export const getAllTodos = async (req: Request, res: Response) => {
  const result = await todosCollection.find().toArray();
  res.send(result);
};

export const postTodos = async (req: Request, res: Response) => {
  const body = req.body;
  const result = await todosCollection.insertOne(body);
  res.send(result);
};

const deleteTodosById = async (req: Request, res: Response) => {};

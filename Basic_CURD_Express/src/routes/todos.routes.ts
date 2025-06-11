import express from "express";
import { getAllTodos } from "../controller/todos.controller";

//Single routing
export const todosRouter = express.Router();

todosRouter.get("/GET", getAllTodos);

// todosRouter.post("/", async (req: Request, res: Response) => {
//   const body = req.body;
//   const result = await todosCollection.insertOne(body);
//   res.send(result);
// });

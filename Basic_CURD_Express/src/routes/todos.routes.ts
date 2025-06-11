import express from "express";
import { getAllTodos, postTodos } from "../controller/todos.controller";

//Single routing
export const todosRouter = express.Router();

todosRouter.post("/", postTodos);
todosRouter.get("/GET", getAllTodos);

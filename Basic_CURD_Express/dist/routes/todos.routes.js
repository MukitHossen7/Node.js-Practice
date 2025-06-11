"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const todos_controller_1 = require("../controller/todos.controller");
//Single routing
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get("/GET", todos_controller_1.getAllTodos);
// todosRouter.post("/", async (req: Request, res: Response) => {
//   const body = req.body;
//   const result = await todosCollection.insertOne(body);
//   res.send(result);
// });

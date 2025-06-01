"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../../../db/todo.json");
exports.todosRouter = express_1.default.Router();
//get all todos data
exports.todosRouter.get("/", (req, res) => {
    const todo_data = fs_1.default.readFileSync(filePath, { encoding: "utf8" });
    res.json(JSON.parse(todo_data));
});
//post single todo data
exports.todosRouter.post("/create", (req, res) => {
    const todoData = req.body;
    console.log(todoData);
    res.send("ADD a single Todo Data");
});

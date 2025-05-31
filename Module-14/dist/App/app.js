"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const filePath = path_1.default.join(__dirname, "../../db/todo.json");
//middleware for user send data use this
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello New Express Developer !!!");
});
//get all todos data
app.get("/todos", (req, res) => {
    const todo_data = fs_1.default.readFileSync(filePath, { encoding: "utf8" });
    res.json(JSON.parse(todo_data));
});
//post single todo data
app.post("/todos/create", (req, res) => {
    const todoData = req.body;
    console.log(todoData);
    res.send("ADD a single Todo Data");
});
exports.default = app;

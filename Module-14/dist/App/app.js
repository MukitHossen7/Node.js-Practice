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
const todoRouter = express_1.default.Router();
//middleware for user send data use this
app.use(express_1.default.json());
app.use("/", todoRouter);
todoRouter.get("/todos", (req, res) => {
    console.log("This is Todo Router");
    // const todo_data = fs.readFileSync(filePath, { encoding: "utf8" });
    res.json({ massage: "This is Todo Router" });
});
app.get("/", (req, res) => {
    res.send("Hello New Express Developer !!!");
});
//get all todos data
app.get("/todos", (req, res) => {
    const todo_data = fs_1.default.readFileSync(filePath, { encoding: "utf8" });
    res.json(JSON.parse(todo_data));
});
//get single data use Params and Queries
app.get("/todo/:id/:title", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log("I am using Params and Queries");
    res.send("I am using Params and Queries");
});
//post single todo data
app.post("/todos/create", (req, res) => {
    const todoData = req.body;
    console.log(todoData);
    res.send("ADD a single Todo Data");
});
exports.default = app;

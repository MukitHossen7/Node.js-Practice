"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("../../db/mongodb");
const mongodb_2 = require("mongodb");
exports.todosRouter = express_1.default.Router();
//Collection
const todosCollection = mongodb_1.client.db("todosDB").collection("todos");
//get all todos data
exports.todosRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield todosCollection.find().toArray();
    res.send(data);
}));
//post single todo data
exports.todosRouter.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todoData = req.body;
    const data = yield todosCollection.insertOne(todoData);
    res.send(data);
}));
exports.todosRouter.get("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = req.params.id;
        const data = yield todosCollection.findOne({ _id: new mongodb_2.ObjectId(todoId) });
        res.send(data);
    }
    catch (error) {
        next(error);
    }
}));
exports.todosRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todoId = req.params.id;
    const data = yield todosCollection.deleteOne({ _id: new mongodb_2.ObjectId(todoId) });
    res.send(data);
}));
exports.todosRouter.put("/update-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todoId = req.params.id;
    const { title, description, completed, dueDate } = req.body;
    const filter = { _id: new mongodb_2.ObjectId(todoId) };
    //   const options = { upsert: true };
    const updateDoc = {
        $set: {
            title: title,
            description: description,
            completed: completed,
            dueDate: dueDate,
        },
    };
    const data = yield todosCollection.updateOne(filter, updateDoc);
    res.send(data);
}));
exports.todosRouter.use((req, res) => {
    res.status(404).json({ message: "Your path not found" });
});
// { message: "Your path not found" }
exports.todosRouter.use((error, req, res, next) => {
    if (error) {
        res
            .status(404)
            .json({ message: error.message || "Something went wrong" });
    }
});

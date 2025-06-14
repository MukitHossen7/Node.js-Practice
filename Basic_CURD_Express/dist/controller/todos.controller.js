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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTodos = exports.getAllTodos = void 0;
const mongodb_1 = require("../db/mongodb");
//collection
const todosCollection = mongodb_1.client.db("CRUD_DB").collection("todos");
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield todosCollection.find().toArray();
    res.send(result);
});
exports.getAllTodos = getAllTodos;
const postTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const result = yield todosCollection.insertOne(body);
    res.send(result);
});
exports.postTodos = postTodos;
const deleteTodosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });

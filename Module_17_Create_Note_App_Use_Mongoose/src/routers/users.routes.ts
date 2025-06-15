import express from "express";
import { postUser } from "../controller/users_controller/post.user.controller";

export const usersRoutes = express.Router();

usersRoutes.post("/", postUser);

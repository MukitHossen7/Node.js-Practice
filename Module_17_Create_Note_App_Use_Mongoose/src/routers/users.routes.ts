import express from "express";
import { postUser } from "../controller/users_controller/post.user.controller";
import { getUsers } from "../controller/users_controller/get.users.controller";
import { updateUser } from "../controller/users_controller/update.user.controller";

export const usersRoutes = express.Router();

usersRoutes.post("/", postUser);
usersRoutes.get("/", getUsers);
usersRoutes.patch("/:id", updateUser);

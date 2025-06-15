import express from "express";
import { postUser } from "../controller/users_controller/post.user.controller";
import { getUsers } from "../controller/users_controller/get.users.controller";
import { updateUser } from "../controller/users_controller/update.user.controller";
import { deleteUser } from "../controller/users_controller/delete.user.controller";
import { getSingleUser } from "../controller/users_controller/get.user.controller";

export const usersRoutes = express.Router();

usersRoutes.post("/", postUser);
usersRoutes.get("/", getUsers);
usersRoutes.patch("/:id", updateUser);
usersRoutes.delete("/:id", deleteUser);
usersRoutes.get("/:id", getSingleUser);

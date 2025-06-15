import express from "express";
import { postNotes } from "../controller/notes_controller/post.controller";

export const noteRouter = express.Router();

noteRouter.post("/", postNotes);

import express from "express";
import { postNotes } from "../controller/notes_controller/post.controller";
import { getNotes } from "../controller/notes_controller/get_notes.controller";
import { getSingleNotes } from "../controller/notes_controller/get_single_notes.controller";
import { updateNote } from "../controller/notes_controller/update_note.controller";

export const noteRouter = express.Router();

noteRouter.post("/", postNotes);
noteRouter.get("/", getNotes);
noteRouter.get("/:id", getSingleNotes);
noteRouter.patch("/:id", updateNote);

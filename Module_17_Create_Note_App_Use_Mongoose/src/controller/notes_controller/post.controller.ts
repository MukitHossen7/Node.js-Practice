import { Request, Response } from "express";
import Note from "../../Models/notes.post.model";

export const postNotes = async (req: Request, res: Response) => {
  try {
    // const { title, content } = req.body;
    // const note = new Note(req.body);
    // const result = await note.save();
    const body = req.body;
    const result = await Note.create(body);
    res.send(result);
  } catch (error) {
    console.error("Error in postNotes:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

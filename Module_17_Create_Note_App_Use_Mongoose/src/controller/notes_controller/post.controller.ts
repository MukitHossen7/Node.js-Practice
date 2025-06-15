import { Request, Response } from "express";
import Note from "../../Models/notes.post.model";

export const postNotes = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    await note.save();

    res.status(201).json({
      message: "Note created successfully",
    });
  } catch (error) {
    console.error("Error in postNotes:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

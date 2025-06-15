import { Request, Response } from "express";
import Note from "../../Models/notes.post.model";

export const getSingleNotes = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const note = await Note.findOne({ _id: id });
    res.status(201).json(note);
  } catch (error) {
    console.error("Error in getSingleNotes:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

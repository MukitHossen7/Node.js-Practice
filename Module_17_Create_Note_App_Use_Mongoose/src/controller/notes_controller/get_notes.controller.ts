import { Request, Response } from "express";
import Note from "../../Models/notes.post.model";

export const getNotes = async (req: Request, res: Response) => {
  try {
    const result = await Note.find();
    res.send(result);
  } catch (error) {
    console.error("Error in getNotes:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

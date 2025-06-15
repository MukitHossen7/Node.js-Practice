import { Request, Response } from "express";
import Note from "../../Models/notes.post.model";

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Note.findByIdAndDelete(id);
    res.status(200).json({
      message: "Note deleted successfully",
      deletedNote: result,
    });
  } catch (error) {
    console.error("Error in DeleteNote:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

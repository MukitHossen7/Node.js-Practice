import { Request, Response } from "express";
import Note from "../../Models/notes.post.model";

export const updateNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const result = await Note.findByIdAndUpdate(id, updateData, { new: true });
    // const result = await Note.updateOne({_id: id}, updateData);
    // const result = await Note.findOneAndUpdate({ _id: id }, updateData);
    res.send(result);
  } catch (error) {
    console.error("Error in UpdateNote:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

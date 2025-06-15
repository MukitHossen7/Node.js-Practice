import { Request, Response } from "express";
import User from "../../Models/user.model";

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await User.findByIdAndUpdate(id, body, { new: true });
    res.send(result);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

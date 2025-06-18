import { Request, Response } from "express";
import User from "../../Models/user.model";

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    // const result = await User.findOneAndDelete({ _id: id });
    res.send(result);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

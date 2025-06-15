import { Request, Response } from "express";
import User from "../../Models/user.model";

export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await User.findById(id);
    res.send(result);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

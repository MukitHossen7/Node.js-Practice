import { Request, Response } from "express";
import User from "../../Models/user.model";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

import { Request, Response } from "express";
import User from "../../Models/user.model";

export const postUser = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = await User.create(body);
    res.send(result);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

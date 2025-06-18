import { Request, Response } from "express";
import User from "../../Models/user.model";

export const getUsers = async (req: Request, res: Response) => {
  try {
    // let result;
    // const { email } = req.query;
    // if (email) {
    //   result = await User.find({ email: email });
    // } else {
    //   result = await User.find();
    // }
    const result = await User.find().skip(5).limit(2);
    res.send(result);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

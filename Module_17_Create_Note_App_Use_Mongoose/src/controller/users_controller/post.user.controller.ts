import { Request, Response } from "express";
import User from "../../Models/user.model";
import { UserZodSchema } from "../../zod.schema/user.zod.schema/user.zod.schema";

export const postUser = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await UserZodSchema.parseAsync(body);
    // data.password = await User.hashStaticPassword(data.password);
    const result = await User.create(data);
    // const user = new User(data);
    // user.password = await user.hashPassword(data.password);
    // const result = await user.save();
    res.send(result);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};

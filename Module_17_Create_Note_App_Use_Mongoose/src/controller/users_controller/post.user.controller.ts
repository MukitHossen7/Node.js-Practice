import { Request, Response } from "express";
import User from "../../Models/user.model";
import { UserZodSchema } from "../../zod.schema/user.zod.schema/user.zod.schema";
import bcrypt from "bcryptjs";

export const postUser = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await UserZodSchema.parseAsync(body);
    const passwordHash = await bcrypt.hash(data.password, 10);
    console.log(passwordHash);
    // const result = await User.create(data);
    res.send(passwordHash);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};

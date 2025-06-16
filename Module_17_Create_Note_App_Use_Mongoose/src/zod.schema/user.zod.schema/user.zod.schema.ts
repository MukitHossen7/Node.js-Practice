import { z } from "zod";

export const UserZodSchema = z.object({
  fname: z.string(),
  lname: z.string(),
  email: z.string(),
  password: z.number(),
  age: z.number(),
  role: z.enum(["user", "admin"]),
  isActive: z.boolean(),
  phoneNumber: z.string(),
});

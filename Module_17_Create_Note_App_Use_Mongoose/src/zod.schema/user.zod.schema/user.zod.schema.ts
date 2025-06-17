import { z } from "zod";

export const UserZodSchema = z.object({
  fname: z.string(),
  lname: z.string(),
  email: z.string(),
  password: z.string(),
  age: z.number(),
  role: z.enum(["user", "admin"]).optional(),
  isActive: z.boolean(),
  phoneNumber: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
    zipCode: z.number(),
  }),
});

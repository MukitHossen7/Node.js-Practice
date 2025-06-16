import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user_interface/user.interface";

const userSchema = new Schema<IUser>(
  {
    fname: {
      type: String,
      required: true,
      trim: true,
      minLength: 10,
      maxLength: 20,
    },
    lname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: Number,
      required: true,
      min: 100000,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 40,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model<IUser>("User", userSchema);
export default User;

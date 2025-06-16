import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user_interface/user.interface";

const userSchema = new Schema<IUser>(
  {
    fname: {
      type: String,
      required: true,
      trim: true,
      minLength: [10, "Must be at least 10, got {VALUE}"],
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
      unique: [true, "Email must be unique"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: Number,
      required: true,
      min: [100000, "Must be at least 6 digits, got {VALUE}"],
    },
    age: {
      type: Number,
      required: true,
      min: [18, "Must be at least 18, got {VALUE}"],
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

import { model, Schema } from "mongoose";
import { IAddress, IUser } from "../interfaces/user_interface/user.interface";
import validator from "validator";
import bcrypt from "bcryptjs";
import { userHashPassword } from "../middleware/user.hash.password/user.hash.password";
import { userSaveData } from "../middleware/user.save.data/user.save.data";
import { deleteAllNotes } from "../middleware/delete.notes/delete.notes";

const addressSchema = new Schema<IAddress>(
  {
    street: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
  },
  {
    _id: false,
  }
);

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
      validate: [validator.isEmail, "Please provide a valid email address"],
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: [6, "Must be at least 6 digits, got {VALUE}"],
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
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (value: string) {
          return /^\+8801\d+$/.test(value);
        },
        message: (props: { value: string }) =>
          `${props.value} is not a valid phone number! It should start with +8801 and be followed by 9 digits.`,
      },
    },
    address: {
      type: addressSchema,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// userSchema.method("hashPassword", async function (pass: string) {
//   const passwordHash = await bcrypt.hash(pass, 10);
//   return passwordHash;
// });

// userSchema.static("hashStaticPassword", async function (pass: string) {
//   const passwordHash = await bcrypt.hash(pass, 10);
//   return passwordHash;
// });
userSchema.pre("save", userHashPassword);
userSchema.post("save", userSaveData);
userSchema.post("findOneAndDelete", deleteAllNotes);

const User = model<IUser>("User", userSchema);
export default User;

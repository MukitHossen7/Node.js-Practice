import { Model } from "mongoose";

export interface IAddress {
  street: string;
  city: string;
  country: string;
  zipCode: number;
}

export interface IUser {
  fname: string;
  lname: string;
  email: string;
  password: string;
  age: number;
  role: "user" | "admin";
  isActive: boolean;
  phoneNumber: string;
  address: IAddress;
}

export interface UserInstanceMethods {
  hashPassword(password: string): string;
}

export interface UserStaticsMethods extends Model<IUser> {
  hashStaticPassword(password: string): string;
}

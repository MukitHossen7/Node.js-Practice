export interface IUser {
  fname: string;
  lname: string;
  email: string;
  password: number;
  age: number;
  role: "user" | "admin";
  isActive: boolean;
}

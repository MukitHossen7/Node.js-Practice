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
  password: number;
  age: number;
  role: "user" | "admin";
  isActive: boolean;
  phoneNumber: string;
  address: IAddress;
}

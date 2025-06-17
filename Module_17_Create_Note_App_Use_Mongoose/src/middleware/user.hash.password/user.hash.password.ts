import bcrypt from "bcryptjs";

export async function userHashPassword(this: any) {
  this.password = await bcrypt.hash(this.password, 10);
}

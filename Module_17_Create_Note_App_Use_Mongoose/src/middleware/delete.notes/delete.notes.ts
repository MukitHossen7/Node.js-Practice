import Note from "../../Models/notes.post.model";
import { HydratedDocument } from "mongoose";
import { IUser } from "../../interfaces/user_interface/user.interface";

export async function deleteAllNotes(doc: HydratedDocument<IUser>) {
  if (doc) {
    try {
      await Note.deleteMany({ user: doc._id });
    } catch (error) {
      console.error("Error in deleteAllNotes middleware:", error);
    }
  }
}

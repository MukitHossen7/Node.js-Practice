import Note from "../../Models/notes.post.model";

export async function deleteAllNotes(doc: any, next: any) {
  try {
    await Note.deleteMany({ user: doc._id });
    next();
  } catch (error) {
    console.error("Error in deleteAllNotes middleware:", error);
    next(error);
  }
}

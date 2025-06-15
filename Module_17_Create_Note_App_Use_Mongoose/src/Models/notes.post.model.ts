import { model, Schema } from "mongoose";
import { INote } from "../interfaces/note_interface/note.interface";

const noteSchema = new Schema<INote>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [
      {
        type: String,
        default: [],
      },
    ],
    metadata: {
      createdBy: {
        type: String,
        required: true,
      },
      department: {
        type: String,
        required: true,
      },
    },
    tasks: [
      {
        task: {
          type: String,
          required: true,
        },
        assignedTo: {
          type: String,
        },
        completed: {
          type: Boolean,
          default: false,
        },
      },
    ],
    isImportant: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ["Work", "Personal", "Other"],
      default: "Other",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Note = model<INote>("Note", noteSchema);
export default Note;

import { model, Schema } from "mongoose";

const noteSchema = new Schema({
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
});

const Note = model("Note", noteSchema);
export default Note;

interface INote {
  title: string;
  tags: string[];
  metadata: {
    createdBy: string;
    department: string;
  };
  tasks: {
    task: string;
    assignedTo?: string;
    completed?: boolean;
  }[];
  isImportant?: boolean;
  priority: number;
  category: "Work" | "Personal" | "Other";
}

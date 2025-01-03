import ToDoItemsLayout from "@/layouts/ToDoItemsLayout";
import { ReactNode } from "react";

export default function ({ children }: { children: ReactNode }) {
  return <ToDoItemsLayout>{children}</ToDoItemsLayout>;
}

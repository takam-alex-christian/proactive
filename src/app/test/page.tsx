"use client";
import ToDoItem from "@/components/ToDoItem";
import ToDoManager from "@/features/ToDoManager";
import ToDoItemsLayout from "@/layouts/ToDoItemsLayout";

export default function () {
  return (
    <main className="flex h-screen w-screen ">
      {/* <ToDoItem content="build a project every week" /> */}

      {/* <ToDoItemsLayout>
        <ToDoItem content="Build multiple projects" />
        <ToDoItem content="Build portfolios projects" />
      </ToDoItemsLayout> */}

      <ToDoManager>
        <ToDoItemsLayout>
          <ToDoItem content="Build multiple projects" />
          <ToDoItem content="Build portfolios projects" />
        </ToDoItemsLayout>
      </ToDoManager>
    </main>
  );
}

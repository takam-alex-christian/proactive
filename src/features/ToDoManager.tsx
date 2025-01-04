"use client";
import { ReactNode, useContext, useEffect } from "react";

import ToDoItemsLayout from "@/layouts/ToDoItemsLayout";

import { ToDoContext } from "@/lib/contexts";
import ToDoItem from "@/components/ToDoItem";

export default function () {
  const toDoState = useContext(ToDoContext);

  useEffect(() => {
    console.log(toDoState);
  }, [toDoState]);

  return (
    <ToDoItemsLayout>
      {toDoState.todos.map((eachToDoItem) => {
        return <ToDoItem content={eachToDoItem.text} />;
      })}
    </ToDoItemsLayout>
  );
}

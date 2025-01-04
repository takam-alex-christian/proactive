"use client";
import { FormEvent, useState, ChangeEvent, useContext } from "react";
import { ToDoDispatcher } from "@/lib/contexts";

import ToDoEditor from "@/components/ToDoEditor";

export default function () {
  const [editorValue, setEditorValue] = useState("");

  const toDoDispatch = useContext(ToDoDispatcher);

  function editorValueChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setEditorValue(e.currentTarget.value);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    toDoDispatch({
      type: "created",
      payload: { id: "0", text: editorValue, completed: false },
    });
  }
  return (
    <ToDoEditor
      editorValue={editorValue}
      onChange={editorValueChangeHandler}
      onSubmit={onSubmit}
    />
  );
}

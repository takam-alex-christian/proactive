"use client";
import { FormEvent, useState, ChangeEvent, useContext } from "react";
import { ToDoContext, ToDoDispatcher } from "@/lib/contexts";

import ToDoEditor from "@/components/ToDoEditor";

export default function () {
  const [editorValue, setEditorValue] = useState("");

  const toDoDispatch = useContext(ToDoDispatcher);
  const toDoState = useContext(ToDoContext);

  function editorValueChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setEditorValue(e.currentTarget.value);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    toDoDispatch({
      type: "created",
      payload: {
        id: Date.now().toString(),
        text: editorValue,
        completed: false,
      },
    });

    setEditorValue("");
  }
  return (
    <ToDoEditor
      editorValue={editorValue}
      onChange={editorValueChangeHandler}
      onSubmit={onSubmit}
    />
  );
}

"use client";
import { FormEvent, useState, ChangeEvent, useContext } from "react";
import { ToDoContext, ToDoDispatcher } from "@/lib/contexts";

import SimpleEditor from "@/components/SimpleEditor";

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
    <SimpleEditor
      editorValue={editorValue}
      onChange={editorValueChangeHandler}
      onSubmit={onSubmit}
      placeholder="create new task"
    />
  );
}

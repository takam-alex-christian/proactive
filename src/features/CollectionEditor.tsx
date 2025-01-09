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
      type: "collection_created",
      payload: {
        name: editorValue,
        id: Date.now().toString(),
      },
    });

    setEditorValue("");
  }
  return (
    <SimpleEditor
      editorValue={editorValue}
      onChange={editorValueChangeHandler}
      onSubmit={onSubmit}
      placeholder="create new collection"
    />
  );
}

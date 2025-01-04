import { FormEvent, useState, ChangeEvent } from "react";
import ToDoEditor from "@/components/ToDoEditor";

export default function () {
  const [editorValue, setEditorValue] = useState("");

  function editorValueChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setEditorValue(e.currentTarget.value);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <ToDoEditor
      editorValue={editorValue}
      onChange={editorValueChangeHandler}
      onSubmit={onSubmit}
    />
  );
}

"use client";
import { FormEvent, useState, ChangeEvent, useContext } from "react";
import { ToDoContext, ToDoDispatcher } from "@/lib/contexts";

import SimpleEditor from "@/components/SimpleEditor";
import { EditorStateType } from "@/lib/types";

export default function ToDoEditor() {
  const [editorState, setEditorState] = useState<EditorStateType>({
    text: "",
    isError: false,
    errorMessage: "",
  });

  const toDoDispatch = useContext(ToDoDispatcher);
  const toDoState = useContext(ToDoContext);

  function editorValueChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const textValue: string = e.currentTarget.value;
    setEditorState((prevState) => {
      return { ...prevState, text: textValue };
    });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!toDoState.selectedCollection) {
      setEditorState((prevState) => {
        return {
          ...prevState,
          isError: true,
          errorMessage: "create a collection first!",
        };
      });

      setTimeout(() => {
        setEditorState((prevState) => {
          return { ...prevState, isError: false };
        });
      }, 2000);

      return;
    }

    if (editorState.text.length == 0) {
      setEditorState((prevState) => {
        return {
          ...prevState,
          isError: true,
          errorMessage: "Task can't be empty!",
        };
      });

      setTimeout(() => {
        setEditorState((prevState) => {
          return { ...prevState, isError: false };
        });
      }, 2000);
      return;
    }

    toDoDispatch({
      type: "created",
      payload: {
        id: Date.now().toString(),
        text: editorState.text,
        completed: false,
        collectionName: toDoState.selectedCollection,
      },
    });

    setEditorState((prevState) => {
      return { ...prevState, text: "", isError: false, errorMessage: "" };
    });
  }
  return (
    <SimpleEditor
      editorState={editorState}
      onChange={editorValueChangeHandler}
      onSubmit={onSubmit}
      placeholder="create new task"
    />
  );
}

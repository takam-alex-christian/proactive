"use client";
import { FormEvent, useState, ChangeEvent, useContext } from "react";
import { ToDoContext, ToDoDispatcher } from "@/lib/contexts";

import SimpleEditor from "@/components/SimpleEditor";

export default function CollectionEditor() {
  const [editorState, setEditorState] = useState<{
    text: string;
    isError: boolean;
    errorMessage: string;
  }>({
    text: "",
    isError: false,
    errorMessage: "",
  });

  const toDoDispatch = useContext(ToDoDispatcher);
  const toDoState = useContext(ToDoContext);

  function editorValueChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const textValue: string = e.currentTarget.value;
    setEditorState((prevState) => {
      return { ...prevState, text: textValue, isError: false };
    });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (
      toDoState.collections.find((collectionName) => {
        return collectionName.name == editorState.text;
      })
    ) {
      setEditorState((prevState) => {
        return {
          ...prevState,
          isError: true,
          errorMessage: "collection already exists!",
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
          errorMessage: "collection name can't be empty",
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
      type: "collection_created",
      payload: {
        name: editorState.text,
        id: Date.now().toString(),
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
      placeholder="create new collection"
    />
  );
}

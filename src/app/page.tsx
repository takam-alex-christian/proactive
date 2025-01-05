"use client";

import { useContext, useEffect, useReducer } from "react";
import { ToDoContext, ToDoDispatcher, initialToDoState } from "@/lib/contexts";
import toDoReducer from "@/lib/reducers";

import ToDoEditor from "@/features/ToDoEditor";
import ToDoManager from "@/features/ToDoManager";
import AppHeaderFeature from "@/features/AppHeaderFeature";
import AppContainer from "@/layouts/AppContainer";
import ToDoEditorLayout from "@/layouts/ToDoEditorLayout";

export default function Home() {
  const [todoState, todoDispatch] = useReducer(toDoReducer, initialToDoState);

  return (
    <ToDoContext.Provider value={todoState}>
      <ToDoDispatcher.Provider value={todoDispatch}>
        <AppContainer>
          {/* todo header */}
          <AppHeaderFeature />

          {/* todo manager */}
          <ToDoManager />

          <ToDoEditorLayout>
            <ToDoEditor />
          </ToDoEditorLayout>
        </AppContainer>
      </ToDoDispatcher.Provider>
    </ToDoContext.Provider>
  );
}

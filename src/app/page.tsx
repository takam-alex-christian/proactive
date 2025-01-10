"use client";

import { useContext, useEffect, useReducer } from "react";
import { ToDoContext, ToDoDispatcher, initialToDoState } from "@/lib/contexts";
import toDoReducer from "@/lib/reducers";

import ToDoEditor from "@/features/ToDoEditor";
import ToDoManager from "@/features/ToDoManager";
import AppHeaderFeature from "@/features/AppHeaderFeature";
import AppContainer from "@/layouts/AppContainer";
import ToDoEditorLayout from "@/layouts/ToDoEditorLayout";
import LeftPaneFeature from "@/features/LeftPaneFeature";

export default function Home() {
  const [todoState, todoDispatch] = useReducer(toDoReducer, initialToDoState);

  useEffect(() => {
    let storedState = localStorage.getItem("toDoState");
    // use a setstate to init state
    if (storedState) {
      todoDispatch({ type: "loaded_state", payload: JSON.parse(storedState) });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("toDoState", JSON.stringify(todoState));
  }, [todoState]);

  return (
    <ToDoContext.Provider value={todoState}>
      <ToDoDispatcher.Provider value={todoDispatch}>
        <main className="relative flex flex-row h-screen">
          <LeftPaneFeature />
          <AppContainer>
            {/* todo header */}
            <AppHeaderFeature />

            {/* todo manager */}
            <ToDoManager />

            <ToDoEditorLayout>
              <ToDoEditor />
            </ToDoEditorLayout>
          </AppContainer>
        </main>
      </ToDoDispatcher.Provider>
    </ToDoContext.Provider>
  );
}

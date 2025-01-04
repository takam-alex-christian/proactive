"use client";

import { useContext, useEffect, useReducer } from "react";
import { ToDoContext, ToDoDispatcher, initialToDoState } from "@/lib/contexts";
import toDoReducer from "@/lib/reducers";

import ToDoEditor from "@/features/ToDoEditor";
import ToDoManager from "@/features/ToDoManager";

export default function Home() {
  const [todoState, todoDispatch] = useReducer(toDoReducer, initialToDoState);

  return (
    <main>
      <ToDoContext.Provider value={todoState}>
        <ToDoDispatcher.Provider value={todoDispatch}>
          {/* todo header */}

          {/* todo manager */}
          <ToDoManager />

          <ToDoEditor />
        </ToDoDispatcher.Provider>
      </ToDoContext.Provider>
    </main>
  );
}

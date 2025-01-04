import { createContext, Dispatch } from "react";
import { ToDoStateType, ToDoReducerActionType } from "./types";

const initialToDoState: ToDoStateType = { todos: [] };

const ToDoContext = createContext<ToDoStateType>(initialToDoState);
const ToDoDispatcher = createContext<Dispatch<ToDoReducerActionType>>(() => {});

export { ToDoContext, ToDoDispatcher, initialToDoState };

type ToDoItemType = {
  completed: false;
  text: string;
  id: string;
};

type ToDoStateType = {
  todos: Array<ToDoItemType>;
};

type ToDoReducerActionType =
  | { type: "deleted" }
  | { type: "completed" }
  | { type: "created"; payload: ToDoItemType };

export type { ToDoItemType, ToDoStateType, ToDoReducerActionType };

import {} from "react";
import { ToDoItemType, ToDoStateType, ToDoReducerActionType } from "./types";

function toDoReducer(
  toDoData: ToDoStateType,
  action: ToDoReducerActionType
): ToDoStateType {
  switch (action.type) {
    case "created": {
      return { ...toDoData, todos: [...toDoData.todos, action.payload] };
    }
    case "deleted": {
      return toDoData;
    }
    case "completed": {
      return toDoData;
    }

    default: {
      console.error({ message: `reducer type possibly not handled for.` });
      return toDoData;
    }
  }
}

export default toDoReducer;

import {} from "react";
import {
  ToDoItemType,
  ToDoStateType,
  ToDoReducerActionType,
  CollectionItemType,
} from "./types";

function toDoReducer(
  toDoData: ToDoStateType,
  action: ToDoReducerActionType
): ToDoStateType {
  switch (action.type) {
    case "created": {
      return { ...toDoData, todos: [...toDoData.todos, action.payload] };
    }
    case "collection_created": {
      return {
        ...toDoData,
        collections: [
          ...toDoData.collections,
          { name: action.payload.name, id: action.payload.id },
        ],
      };
    }
    case "selected_collection_changed": {
      return {
        ...toDoData,
        selectedCollection: action.payload.name,
      };
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

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
    case "loaded_state": {
      return action.payload;
    }
    case "created": {
      return { ...toDoData, todos: [...toDoData.todos, action.payload] };
    }
    case "collection_created": {
      return {
        ...toDoData,
        selectedCollection: !toDoData.selectedCollection
          ? action.payload.name
          : toDoData.selectedCollection,
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
      return {
        ...toDoData,
        todos: toDoData.todos.filter((eachToDo) => {
          return eachToDo.id != action.payload.id;
        }),
      };
    }
    case "completed": {
      let itemIndex = toDoData.todos.findIndex((eachToDo) => {
        return eachToDo.id == action.payload.id;
      });

      if (itemIndex) toDoData.todos[itemIndex].completed = true;

      console.log(itemIndex);
      console.log(toDoData.todos[itemIndex].completed);

      return { ...toDoData };
    }

    default: {
      console.error({ message: `reducer type possibly not handled for.` });
      return toDoData;
    }
  }
}

export default toDoReducer;

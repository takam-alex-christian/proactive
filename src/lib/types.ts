type ToDoItemType = {
  completed: false;
  text: string;
  id: string;
};

type ToDoStateType = {
  selectedCollection: string;
  collections: Array<CollectionItemType>;
  todos: Array<ToDoItemType>;
};

type CollectionItemType = {
  name: string;
  id: string;
};

type ToDoReducerActionType =
  | { type: "loaded_state"; payload: ToDoStateType }
  | { type: "deleted" }
  | { type: "completed" }
  | { type: "created"; payload: ToDoItemType }
  | { type: "collection_created"; payload: CollectionItemType }
  | { type: "selected_collection_changed"; payload: { name: string } };

export type {
  ToDoItemType,
  CollectionItemType,
  ToDoStateType,
  ToDoReducerActionType,
};

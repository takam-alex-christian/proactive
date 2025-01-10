type ToDoItemType = {
  collectionName: string; // could be replace by collection id instead
  completed: boolean;
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

type EditorStateType = {
  text: string;
  isError: boolean;
  errorMessage: string;
};
type ToDoReducerActionType =
  | { type: "loaded_state"; payload: ToDoStateType }
  | { type: "deleted"; payload: { id: string } }
  | { type: "completed"; payload: { id: string; completed: boolean } }
  | { type: "created"; payload: ToDoItemType }
  | { type: "collection_created"; payload: CollectionItemType }
  | { type: "selected_collection_changed"; payload: { name: string } };

export type {
  ToDoItemType,
  CollectionItemType,
  ToDoStateType,
  ToDoReducerActionType,
  EditorStateType,
};

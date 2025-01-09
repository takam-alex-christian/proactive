import { useContext } from "react";
import { ToDoContext, ToDoDispatcher } from "@/lib/contexts";
import { Button } from "@nextui-org/react";

export default function () {
  const toDoState = useContext(ToDoContext);
  const toDoDispatch = useContext(ToDoDispatcher);

  return (
    <div className="flex flex-col">
      {toDoState.collections.map((eachCollection) => {
        return (
          <Button
            onPress={() => {
              toDoDispatch({
                type: "selected_collection_changed",
                payload: { name: eachCollection.name },
              });
            }}
            key={eachCollection.id}
            className={`flex items-center justify-start ${
              toDoState.selectedCollection == eachCollection.name
                ? "bg-[#F6F6F6]"
                : "bg-transparent "
            }`}
          >
            {eachCollection.name}
          </Button>
        );
      })}
    </div>
  );
}

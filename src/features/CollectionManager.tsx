import { useContext } from "react";
import { ToDoContext, ToDoDispatcher } from "@/lib/contexts";
import { Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";

export default function () {
  const toDoState = useContext(ToDoContext);
  const toDoDispatch = useContext(ToDoDispatcher);

  return (
    <div className="relative flex flex-col pb-4 min-h-10 max-h-max overflow-x-hidden">
      <AnimatePresence>
        {toDoState.collections.length == 0 && (
          <motion.div
            className="absolute text-gray-700"
            initial={{ scale: 0, opacity: 0, left: -500 }}
            animate={{ scale: 1, opacity: 1, left: 0 }}
            exit={{ scale: 0, opacity: 0, left: -500 }}
          >
            <h3 className="font-semibold text-base">No Collections!</h3>
            <p className="font-medium text-sm">create a collection first</p>
          </motion.div>
        )}
        {toDoState.collections.map((eachCollection) => {
          return (
            <motion.div
              key={eachCollection.id}
              className="flex flex-row w-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <Button
                onPress={() => {
                  toDoDispatch({
                    type: "selected_collection_changed",
                    payload: { name: eachCollection.name },
                  });
                }}
                key={eachCollection.id}
                className={`flex items-center justify-start w-full ${
                  toDoState.selectedCollection == eachCollection.name
                    ? "bg-[#F6F6F6]"
                    : "bg-transparent "
                }`}
              >
                {eachCollection.name}
              </Button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect } from "react";

import ToDoItemsLayout from "@/layouts/ToDoItemsLayout";

import { ToDoContext } from "@/lib/contexts";
import ToDoItem from "@/features/ToDoItem";

export default function ToDoManager() {
  const toDoState = useContext(ToDoContext);

  const todos = toDoState.todos.filter((eachToDo) => {
    return eachToDo.collectionName == toDoState.selectedCollection;
  }); //todos from the selected collection

  useEffect(() => {
    console.log(toDoState);
  }, [toDoState]);

  return (
    <ToDoItemsLayout>
      <AnimatePresence>
        {todos.length == 0 && (
          <motion.div
            className="absolute flex flex-col justify-center items-center text-gray-700 w-full h-full bg-white rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="font-semibold text-base ">No Tasks to do!</h3>
            <p className="font-medium text-sm">
              Create a task and it will be displayed here.
            </p>
          </motion.div>
        )}

        {toDoState.todos
          .filter((eachItem) => {
            return eachItem.collectionName == toDoState.selectedCollection;
          })
          .map((eachToDoItem) => {
            return (
              <motion.div
                key={eachToDoItem.id}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{}}
                exit={{ opacity: 0, scaleY: 0, marginTop: -56 }}
              >
                <ToDoItem
                  completed={eachToDoItem.completed}
                  id={eachToDoItem.id}
                  key={eachToDoItem.id}
                  text={eachToDoItem.text}
                />
              </motion.div>
            );
          })}
      </AnimatePresence>
    </ToDoItemsLayout>
  );
}

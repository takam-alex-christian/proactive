"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useContext, useEffect } from "react";

import ToDoItemsLayout from "@/layouts/ToDoItemsLayout";

import { ToDoContext } from "@/lib/contexts";
import ToDoItem from "@/components/ToDoItem";

export default function () {
  const toDoState = useContext(ToDoContext);

  useEffect(() => {
    console.log(toDoState);
  }, [toDoState]);

  return (
    <ToDoItemsLayout>
      <AnimatePresence>
        {toDoState.todos.map((eachToDoItem) => {
          return (
            <motion.div
              key={eachToDoItem.id}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{}}
              exit={{ opacity: 0, scaleY: 0 }}
            >
              <ToDoItem key={eachToDoItem.id} content={eachToDoItem.text} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </ToDoItemsLayout>
  );
}

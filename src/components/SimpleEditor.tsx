import { useState, ChangeEvent } from "react";

import { motion } from "framer-motion";

import {
  Textarea,
  extendVariants,
  Popover,
  PopoverContent,
} from "@nextui-org/react";
import { PlusSignIcon } from "@/assets/uicons";
import { EditorStateType } from "@/lib/types";

const CustomTextArea = extendVariants(Textarea, {
  variants: {
    color: {
      light: {
        inputWrapper: ["bg-black", "text-white"],
      },
    },
  },
});
export default function ToDoEditor({
  editorState,
  onSubmit,
  onChange,
  placeholder,
}: {
  editorState: EditorStateType;
  onSubmit: React.FormEventHandler;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  isError?: boolean;
  setError?: () => {};
}) {
  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <div className="relative flex flex-row justify-between items-center h-10">
          {editorState.isError && (
            <motion.div
              className="absolute bottom-10 px-4 py-2 bg-red-100 text-red-500 rounded-md w-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              {editorState.errorMessage}
            </motion.div>
          )}
          <div className="flex flex-row items-center gap-2 px-3 bg-black text-white w-full h-full cursor-text focus-within:bg-black rounded-full">
            <PlusSignIcon className=" text-white w-2 h-5 font-extrabold " />
            <input
              value={editorState.text}
              onChange={onChange}
              autoComplete="off"
              className="w-full h-full font-medium focus:outline-none bg-transparent"
              placeholder={placeholder}
              name="todo_editor"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

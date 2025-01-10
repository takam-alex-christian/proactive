import { motion, AnimatePresence } from "framer-motion";

import { PlusSignIcon } from "@/assets/uicons";
import { EditorStateType } from "@/lib/types";

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
  setError?: () => void;
}) {
  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <div className="relative flex flex-row justify-between items-center h-10">
          <div className="flex flex-row items-center gap-2 px-3 bg-black text-white w-full h-full cursor-text focus-within:bg-black rounded-full">
            <PlusSignIcon className=" text-white w-4 h-4 font-extrabold " />
            <input
              value={editorState.text}
              onChange={onChange}
              autoComplete="off"
              className="w-full h-full font-medium focus:outline-none bg-transparent"
              placeholder={placeholder}
              name="todo_editor"
            />
          </div>
          <AnimatePresence>
            {editorState.isError && (
              <motion.div
                className="absolute bottom-11 px-4 py-2 bg-red-100 text-xs text-red-500 rounded-md w-full"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scaleX: 0, opacity: 0, left: -500 }}
              >
                {editorState.errorMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}

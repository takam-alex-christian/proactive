import { useState, ChangeEvent } from "react";

import { Textarea, extendVariants } from "@nextui-org/react";
import { PlusSignIcon } from "@/assets/uicons";

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
  editorValue,
  onSubmit,
  onChange,
}: {
  editorValue: string;
  onSubmit: React.FormEventHandler;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <div className="flex flex-row justify-between items-center h-10">
          <div className="flex flex-row items-center gap-2 px-3 bg-black text-white w-full h-full cursor-text focus-within:bg-black rounded-full">
            <PlusSignIcon className=" text-white w-2 h-5 font-extrabold " />
            <input
              value={editorValue}
              onChange={onChange}
              autoComplete="off"
              className="w-full h-full font-medium focus:outline-none bg-transparent"
              placeholder="What's up ?"
              name="todo_editor"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

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
export default function ToDoEditor() {
  return (
    <div className="">
      <div className="flex flex-row justify-between items-center h-10">
        <div className="flex flex-row items-center gap-2 px-3 bg-black text-white w-full h-full cursor-text focus-within:bg-slate-800 rounded-full">
          <PlusSignIcon className="text-white w-5 h-5 font-extrabold " />
          <input
            className="w-full h-full focus:outline-none bg-transparent"
            placeholder="What's up ?"
          />
        </div>
      </div>
    </div>
  );
}

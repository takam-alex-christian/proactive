import { Calendar } from "@nextui-org/react";
import CollectionEditor from "./CollectionEditor";
import CollectionManager from "./CollectionManager";

export default function () {
  return (
    <div className="flex flex-col gap-4 max-w-xs w-1/3 min-w-56 bg-white pt-6 px-4">
      <h3 className="text-lg font-semibold">Collections</h3>
      {/* {list the collections here} */}
      <CollectionManager />
      <CollectionEditor />
    </div>
  );
}

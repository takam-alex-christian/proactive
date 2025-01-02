import { useState } from "react";
import { Checkbox } from "@nextui-org/react";

export default function () {
  const [isChecked, setCheckState] = useState(false);

  return (
    <div className="flex flex-row items-center h-9 px-2">
      <Checkbox isSelected={isChecked} onValueChange={setCheckState}>
        {}
      </Checkbox>
    </div>
  );
}

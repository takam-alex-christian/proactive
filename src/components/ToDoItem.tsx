import { useState } from "react";

import { Checkbox, Button } from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";

export default function ({ content }: { content: string }) {
  const [isChecked, setCheckState] = useState(false);

  return (
    <div className="flex flex-row w-full items-center h-9 px-2 rounded-md bg-white">
      <Checkbox isSelected={isChecked} onValueChange={setCheckState}>
        {content}
      </Checkbox>

      {/* options */}
      <Dropdown>
        <DropdownTrigger>
          <Button variant="flat" size="sm">
            Open Menu
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {/* <DropdownItem key="new">New file</DropdownItem> */}
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

import { useState } from "react";

import { Checkbox, Button } from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import { MenuIcon, MoreVerticalIcon } from "@/assets/uicons";

export default function ({ content }: { content: string }) {
  const [isChecked, setCheckState] = useState(false);

  return (
    <div className="flex flex-row justify-between w-full items-center h-9 px-2 py-6 rounded-md bg-white">
      <Checkbox isSelected={isChecked} onValueChange={setCheckState} size="lg">
        {content}
      </Checkbox>

      {/* options */}
      <Dropdown>
        <DropdownTrigger>
          <Button variant="flat" size="sm" isIconOnly>
            <MoreVerticalIcon />
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

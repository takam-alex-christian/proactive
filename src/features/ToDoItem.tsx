"use client";

import { useContext, useState } from "react";

import { Checkbox, Button } from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import { MenuIcon, MoreVerticalIcon } from "@/assets/uicons";
import { ToDoDispatcher } from "@/lib/contexts";
import { ToDoItemType } from "@/lib/types";

export default function (toDoItemData: Omit<ToDoItemType, "collectionName">) {
  const toDoDispatch = useContext(ToDoDispatcher);

  function onDeletePressHandler() {
    toDoDispatch({ type: "deleted", payload: { id: toDoItemData.id } });
  }

  function onCheckValueChange(isSelected: boolean) {
    toDoDispatch({
      type: "completed",
      payload: { id: toDoItemData.id, completed: isSelected },
    });
  }

  return (
    <div className="flex flex-row justify-between w-full items-center h-9 pl-3 pr-2 py-6 rounded-md bg-white  ">
      <Checkbox
        isSelected={toDoItemData.completed}
        lineThrough
        // isSelected={toDoItemData.completed}
        onValueChange={onCheckValueChange}
        size="md"
      >
        {toDoItemData.text}
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
          <DropdownItem
            key="delete"
            onPress={onDeletePressHandler}
            className="text-danger"
            color="danger"
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

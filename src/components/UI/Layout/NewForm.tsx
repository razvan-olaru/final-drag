import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
// import { handleDragEnd, isDropped } from "../../../utils/utils";
import { Draggable } from "../../Form/Dragabble";
import { Droppable } from "../../Form/Droppable";
import Input from "../Input";

export default function NewForm() {
  const inputOptions: string[] = ["text", "password", "checkbox"];
  const [isDropped, setIsDropped] = useState(false);
  const handleDragEnd = (event) => {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  };

  const formFields: object[] = [{ input: 0 }, { input: 1 }, { textbox: 2 }];

  const postUserForm = fetch("/api/post-form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formFields),
  });

  return (
    <>
      <div className="mx-auto flex h-1/2 w-9/12 max-w-7xl flex-col items-center justify-center p-8">
        <h2 className="text-lg font-medium">Create new form</h2>
        <div className="flex w-full flex-1 items-center justify-between">
          <div className="flex flex-col items-center justify-center rounded-lg border-4 border-dashed border-gray-200 p-8">
            <h2 className="pb-4 font-medium">Items</h2>
            {inputOptions.map((elem) => {
              return (
                <>
                  <div className="flex">
                    <Input type={elem} name={elem} key={elem}></Input>
                  </div>
                </>
              );
            })}
          </div>
          <DndContext onDragEnd={handleDragEnd}>
            <div className="h-1/2 w-1/2">
              <Droppable className="h-full rounded-lg border-4 border-dashed border-gray-200">
                <h2 className="text-center align-middle">Drag items here</h2>
              </Droppable>
            </div>
          </DndContext>
        </div>
        <button
          className="flex w-1/4 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          type="submit"
          onClick={() => {}}
        >
          Save your form
        </button>
      </div>
    </>
  );
}

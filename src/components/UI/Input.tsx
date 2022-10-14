import { DndContext } from "@dnd-kit/core";
import { useRef, useState } from "react";
import { handleDragEnd, isDropped } from "../../utils/utils";
import { Draggable } from "../Form/Dragabble";

export default function Input({
  key,
  name,
  type,
}: {
  key?: string;
  name?: string;
  type?: string;
}) {
  switch (type) {
    case "text":
      return (
        <>
          <DndContext onDragEnd={handleDragEnd}>
            {!isDropped ? (
              <Draggable>
                <div className="flex flex-col">
                  <label htmlFor={name}>Name</label>
                  <input
                    className="rounded border-2 border-solid border-gray-600"
                    name={name}
                    type={type}
                    key={key}
                  ></input>
                </div>
              </Draggable>
            ) : null}
          </DndContext>
        </>
      );
    case "password":
      return (
        <>
          <DndContext onDragEnd={handleDragEnd}>
            {!isDropped ? (
              <Draggable>
                <div className="flex flex-col">
                  <label htmlFor={name}>Password</label>
                  <input
                    className="rounded border-2 border-solid border-gray-600"
                    name={name}
                    type={type}
                    key={key}
                  ></input>
                </div>
              </Draggable>
            ) : null}
          </DndContext>
        </>
      );
    case "checkbox":
      return (
        <>
          <DndContext onDragEnd={handleDragEnd}>
            {!isDropped ? (
              <Draggable>
                <div className="flex flex-col">
                  <label htmlFor={name}>Checkbox</label>
                  <input name={name} type={type} key={key}></input>
                </div>
              </Draggable>
            ) : null}
          </DndContext>
        </>
      );
    default:
      return null;
  }
}

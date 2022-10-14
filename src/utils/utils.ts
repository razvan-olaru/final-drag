import { useState } from "react";

export var isDropped = false;
export const handleDragEnd = (event) => {
  if (event.over && event.over.id === "droppable") {
    isDropped = true;
  }
};

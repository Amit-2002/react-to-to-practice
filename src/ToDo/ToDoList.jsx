import React from "react";
import { MdCheckBox, MdDelete } from "react-icons/md";

function ToDoList({data, handleDelete}) {
  return (
    <>
      <li>{data}</li>
      <button>
        <MdCheckBox />
      </button>
      <button onClick={() => handleDelete(data)}>
        <MdDelete />
      </button>
    </>
  );
}

export default ToDoList;

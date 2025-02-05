import React from "react";
import { MdCheckBox, MdDelete } from "react-icons/md";

function ToDoList({key, data, handleDelete}) {
  return (
    <>
      <li key={key}>{data}</li>
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

import React, { useState } from 'react';
// import { MdDelete, MdCheckBox } from "react-icons/md";
import { Form } from './ToDo/Form';
import ToDoList from './ToDo/ToDoList';
// import Date from './ToDo/Date';


function App() {
  const [taskList, setTask] = useState([]);

 

  // handle form submit function
  const handleFormSubmit = (input) => {
    const {id, content, checked} = input;

    if(!content) return;

    const toDoChecked = taskList.find((curTask) => curTask.content === content); 
    if (toDoChecked) return;

    setTask((prevTask) => [...prevTask, {id, content, checked}]);
  }


  // handle Delete function
  function handleDelete(task){
    const updatedlist = taskList.filter((curTask) => curTask.content != task);
    setTask(updatedlist);
  }


  // handle clear all function
  function handleAllClear(){
    setTask([])
  }


  return (
    <>
      <h1>ToDo App</h1>
      {/* <Date /> */}
      <Form addTask={handleFormSubmit} />
      <section>
        <ul>
          {
            taskList.map((curTask) => {
              return(
                <ToDoList 
                key={curTask.id} 
                data={curTask.content}
                handleDelete={handleDelete}
                />
              )
            })
          }
        </ul>
      </section>
      <button onClick={handleAllClear}>Clear All</button>
    </>
    
  )
}

export default App
import React, { useState } from 'react';
import { MdDelete, MdCheckBox } from "react-icons/md";
import { Form } from './ToDo/Form';
import ToDoList from './ToDo/ToDoList';
// import Date from './ToDo/Date';


function App() {
  const [taskList, setTask] = useState([]);

 

  // handle form submit function
  const handleFormSubmit = (input) => {
    if(!input) return;
    if (taskList.includes(input)){
      return
    }
    setTask((prevTask) => [...prevTask, input]);
  }


  // handle Delete function
  function handleDelete(task){
    const updatedlist = taskList.filter((curTask) => curTask != task);
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
            taskList.map((task,index) => {
              return(
                <ToDoList 
                key={index} data={task}
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
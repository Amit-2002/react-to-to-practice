import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { Form } from './ToDo/Form';


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
      <Form addTask={handleFormSubmit} />
      <section>
        <ul>
          {
            taskList.map((task,index) => {
              return(
                <>
                  <li key={index}>{task}</li>
                  <button>
                    <MdCheckBox />
                  </button>
                  <button onClick={() => handleDelete(task)}>
                    <MdDelete />
                  </button>
                </>
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
import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";

function App() {

  const [input, setInput] = useState('');
  const [taskList, setTask] = useState([]);

  // handle input function
  function handleInput(event){
    setInput(event.target.value);
  }

  // handle form submit function
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("this is input",input);
    console.log("this is task",taskList);
    
    
    setTask((prev)=>[...prev,input])
    setInput("")
    // if(!input) return;
    // if (taskList.includes(input)){
    //   setInput('');
    //   return
    // }
    // setTask((prevTask) => [...prevTask, input]);
    // setInput('');
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

      <section>
        <form onSubmit={handleFormSubmit}>
          <input type="text"
          placeholder='Add task'
          value={input}
          onChange={handleInput}
          />

          <button type='submit'>Add</button>
        </form>
      </section>

      <section>
        <ul>
          {
            taskList.map((task,index) => {
              return(
                <>
                  <li key={index}>{task}</li>
                  {/* <button>
                    <MdCheckBox />
                  </button>
                  <button onClick={() => handleDelete(task)}>
                    <MdDelete />
                  </button> */}
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
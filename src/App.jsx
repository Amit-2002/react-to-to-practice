import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";

function App() {

  const [input, setInput] = useState('');
  const [taskList, setTask] = useState([]);

  function handleInput(){
    setInput(event.target.value);
  }

  const handleFormSubmit = () => {
    event.preventDefault();
    
    if(!input) return;
    if (taskList.includes(input)){
      setInput('');
      return
    }
    setTask((prevTask) => [...prevTask, input]);
    setInput('');
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
                  <button>
                    <MdDelete />
                  </button>
                  <button>
                    <MdCheckBox />
                  </button>
                </>
              )
            })
          }
        </ul>
      </section>
    </>
    
  )
}

export default App
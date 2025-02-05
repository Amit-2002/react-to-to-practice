import React, { useState } from 'react';

export const Form = ({addTask}) => {
    const [input, setInput] = useState({});

    // handle input function
    function handleInput(value){
        setInput({id: value, content: value, checked: false});
    }

        // handle form submit
    function handleFormSubmit(event){
        event.preventDefault();
        addTask(input);
        setInput({id: "", content: "", checked: false});
    }

    return(
        <section>
            <form onSubmit={handleFormSubmit}>
                <input type="text"
                placeholder='Add task'
                value={input.content}
                onChange={(e) => handleInput(e.target.value)}
                />

                <button type='submit'>Add</button>
            </form>
      </section>
    )
}
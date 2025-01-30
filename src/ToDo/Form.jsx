import React, { useState } from 'react';

export const Form = ({addTask}) => {
    const [input, setInput] = useState('');

    // handle input function
    function handleInput(event){
        setInput(event.target.value);
    }

        // handle form submit
    function handleFormSubmit(event){
        event.preventDefault();
        addTask(input);
        setInput("");
    }

    return(
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
    )
}
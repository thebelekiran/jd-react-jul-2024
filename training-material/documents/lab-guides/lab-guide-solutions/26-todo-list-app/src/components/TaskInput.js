import { useRef } from 'react';

import './TaskInput.css';

const TaskInput = ( { addTask } ) => {
    const inputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        addTask( inputRef.current.value );
    };

    return (
        <form className="task-input" onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="What do you want to do?"
                ref={inputRef}
            />
            <button
                type="submit"
                className="btn btn-primary"
            >
                Add Task
            </button>
        </form>
    );
};

export default TaskInput;
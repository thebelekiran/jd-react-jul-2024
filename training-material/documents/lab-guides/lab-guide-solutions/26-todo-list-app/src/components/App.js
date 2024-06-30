import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TaskInput from './TaskInput';
import TaskFilter from './TaskFilter'
import TaskList from './TaskList'

import './App.css';

const App = ( { tasks : tasksProps } ) => {
    const [ tasks, setTasks ] = useState( [ ...tasksProps ] );
    const [ filter, setFilter ] = useState( 'all' );

    const addTask = task => setTasks(curTasks => [
        ...curTasks,
        {
            id: uuidv4(),
            name: task,
            completed: false
        }
    ]);
    
    const deleteTask = task => setTasks( curTasks => curTasks.filter( t => t.id !== task.id ) );
    
    const toggleCompleted = task => setTasks(curTasks => curTasks.map( t => t.id === task.id ? { ...t, completed: !t.completed } : t ));

    const getFilteredTasks = () => {
        switch( filter ) { 
            case 'done':
                return tasks.filter( t => t.completed );
            case 'not done':
                return tasks.filter( t => !t.completed );
            default: 
                return tasks;
        }
    };

    return (
        <div className="app">
            <h1>Todo List</h1>
            <hr style={{border: 0, borderBottom: '1px solid white' }}/>
            <TaskInput 
                addTask={addTask}
            />
            <TaskFilter
                filter={filter}
                setFilter={setFilter} />
            <TaskList
                tasks={getFilteredTasks()}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted} />
        </div>
    );
}

export default App;
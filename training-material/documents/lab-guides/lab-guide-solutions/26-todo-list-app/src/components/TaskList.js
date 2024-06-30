import './TaskList.css';

const TaskList = ( { tasks, deleteTask, toggleCompleted } ) => {
    return (
        <ol className="task-list">
            {
                tasks.map( task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleCompleted( task )}
                            className="task-toggle-completed"
                        />
                        <span className={`task-name ${task.completed && `task-not-completed`}`}>{task.name}</span>
                        <button
                            onClick={() => deleteTask( task )}
                            className="btn-delete-task btn btn-danger"
                        >
                            Delete
                        </button>
                    </li>
                ))
            }
        </ol>
    );
};

export default TaskList;
import './TaskFilter.css';

const TaskFilter = ( { filter, setFilter } ) => {
    return (
        <div className="task-filters">
            <button
                onClick={() => setFilter( 'all' )}
                className={`btn btn-primary ${filter === 'all' && 'active-filter'}`}
            >
                ALL
            </button>
            <button
                onClick={() => setFilter( 'done' )}
                className={`btn btn-primary ${filter === 'done' && 'active-filter'}`}
            >
                DONE
            </button>
            <button
                onClick={() => setFilter( 'not done' )}
                className={`btn btn-primary ${filter === 'not done' && 'active-filter'}`}
            >
                NOT DONE
            </button>
        </div>
    );
};

export default TaskFilter;
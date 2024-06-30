import React from 'react';
import { useStoreContext } from '../contexts/store';
import { observer } from 'mobx-react';

// wrapping the function/class component in an observer() results in re-render of the component when an observable value it uses within changes
const Counter = observer(() => {
    const { appCounter } = useStoreContext();
    
    console.log( 'Counter rendered' );
    console.log( appCounter );

    return (
        <div>
            <button onClick={() => appCounter.decrement()}>-</button>
            Counter value is <span>{appCounter.value}</span> and its square i <span>{appCounter.square}</span>
            <button onClick={() => appCounter.increment()}>+</button>
        </div>
    );
});

export default Counter;
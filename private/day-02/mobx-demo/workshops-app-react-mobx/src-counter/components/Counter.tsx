import React from 'react';
import { inject, observer } from 'mobx-react';
import AppCounter from '../models/Counter';

type Props = {
    appCounter?: AppCounter
};

// wrapping the observer component in inject() results in the selected prop (i.e. appCounter) passed in Provider, to be available as a prop in the component here
const Counter = inject( 'appCounter' )(observer(( props : Props ) => {
    const { appCounter } = props;
    
    console.log( 'Counter rendered' );
    console.log( appCounter );

    return (
        <div>
            <button onClick={() => appCounter?.decrement()}>-</button>
            Counter value is <span>{appCounter?.value}</span> and its square i <span>{appCounter?.square}</span>
            <button onClick={() => appCounter?.increment()}>+</button>
        </div>
    );
}));

export default Counter;
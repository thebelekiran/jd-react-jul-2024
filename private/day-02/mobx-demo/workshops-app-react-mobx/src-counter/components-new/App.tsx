import React, { useMemo } from 'react';
import Counter from './Counter';
import StoreContext from '../contexts/store';
import appCounter from '../stores/Counter';

const App = ( ) => {
    // if we create the object to be passed in context this way, we end up re-creating it each time the App re-renders. The StoreContext.Provider also provides this new object. As a result all consumers of the store value will refresh even if none of their UI needs to.
    // const value = {
    //     appCounter: appCounter
    // };

    // useMemo() makes sure to re-create the returned object ONLY when appCounter now changes
    const value = useMemo(() => {
        return {
            appCounter: appCounter
        };
    }, [ appCounter ]);

    return (
        <StoreContext.Provider value={value}>
            <Counter />
        </StoreContext.Provider>
    );
}

export default App;
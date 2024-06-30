import React from 'react';
import Counter from './Counter';
import appCounter from '../stores/Counter';
import { Provider } from 'mobx-react';

const App = ( ) => {
    return (
        <Provider appCounter={appCounter}>
            <Counter />
        </Provider>
    );
}

export default App;
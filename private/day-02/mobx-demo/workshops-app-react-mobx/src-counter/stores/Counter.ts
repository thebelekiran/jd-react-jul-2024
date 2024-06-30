import Counter from '../models/Counter';
import { autorun } from 'mobx';

const appCounter = new Counter( 0 );

// utomatically run a function when an observable value used within the function changes
autorun(() => {
    console.log( appCounter.value );
});

export default appCounter;
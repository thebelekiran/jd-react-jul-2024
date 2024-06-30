import { createContext, useContext } from 'react';
import appCounter from '../stores/Counter';

// Creates a Provider component
const StoreContext = createContext({
    appCounter: appCounter
});

export const useStoreContext = () => {
    return useContext( StoreContext );
};

export default StoreContext;
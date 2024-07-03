import { configureStore } from '@reduxjs/toolkit'
import casrtSlice from './slices/cartSlice';

const store = configureStore ({
    reducer: {
        cart: casrtSlice.reducer
    }
});
 
export default store;
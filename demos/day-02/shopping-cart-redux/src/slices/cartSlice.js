import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart(state, action) {
            console.log('action = ', action);

            // just make any change - no need to return anything
            state.items.push(action.payload.item);
        }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice;
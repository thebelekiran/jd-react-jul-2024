import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart(state, payload) {
            // just make any change - no need to return anything
            state.items.push(payload.item);
        }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice;
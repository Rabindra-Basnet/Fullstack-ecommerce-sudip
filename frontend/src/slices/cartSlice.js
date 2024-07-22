import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload];
            // state.cartItems.push(action.payload); // // Can be used but above line method is better 
        },
        removeItem: () => {},
    }
});

export const { addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;


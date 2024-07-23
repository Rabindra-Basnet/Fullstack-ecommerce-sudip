import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem: (state, action) => {
            let exists = state.cartItems.find(
                (item) => item._id === action.payload._id
            );
            if(exists){
                state.cartItems = state.cartItems.map((item) => 
                item._id === exists._id ? action.payload: item
                );
            }
            else state.cartItems = [...state.cartItems, action.payload];
            // state.cartItems.push(action.payload); // // Can be used but above line method is better 
        },
        removeItem: () => {},
    }
});

export const { addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;


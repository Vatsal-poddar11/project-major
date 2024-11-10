import { createSlice } from "@reduxjs/toolkit";

const updateItem = (cartItems, item) => {
    if (cartItems[item.id]) {
        cartItems[item.id].quantity += item.quantity;
    } else {
        cartItems[item.id] = { ...item }; 
    }
};

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        usersCarts: {}, 
    },
    reducers: {
        add: (state, action) => {
            const { userId, item } = action.payload;
            if (!state.usersCarts[userId]) {
                state.usersCarts[userId] = { items: {} }; 
            }
            updateItem(state.usersCarts[userId].items, {
                ...item,
                imageUrl: item.image,
            });
            
        },
        remove: (state, action) => {
            const { userId, itemId } = action.payload;
            if (state.usersCarts[userId]) {
                delete state.usersCarts[userId].items[itemId];
            }
        },
        updateQuantity: (state, action) => {
            const { userId, id, quantity } = action.payload;
            if (state.usersCarts[userId] && state.usersCarts[userId].items[id]) {
                state.usersCarts[userId].items[id].quantity = quantity;
            }
        },
        clearCart: (state, action) => {
            const userId = action.payload;
            if (state.usersCarts[userId]) {
                state.usersCarts[userId].items = {}; 
            }
        },
    },
});

export const { add, remove, updateQuantity, clearCart } = CartSlice.actions;
export default CartSlice.reducer;

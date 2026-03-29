import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    // خليه Object جواه مصفوفة
    initialState: {
        items: [] 
    },
    name: "cartslice",
    reducers: {
        addtocart: (state, action) => {
            const findproduct = state.items.find((product) => product.id === action.payload.id);
            if (findproduct) {
                findproduct.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        deletefromcart: (state, action) => {
            state.items = state.items.filter((product) => product.id !== action.payload.id);
        },
        clear: (state) => {
            state.items = [];
        },
        decreaseQuantity: (state, action) => {
            const findproduct = state.items.find((product) => product.id === action.payload.id);
            if (findproduct) {
                if (findproduct.quantity > 1) {
                    findproduct.quantity -= 1;
                } else {
                    state.items = state.items.filter((product) => product.id !== action.payload.id);
                }
            }
        },
    }
});
export const {addtocart , deletefromcart , decreaseQuantity,clear} = cartslice.actions
export default cartslice.reducer
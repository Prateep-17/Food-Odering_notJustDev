import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "./types";

type CartType = {
  items: CartItem[];
//   addItem: (product: Product, size: CartItem['size']) => void;
//   updateQuantity: (itemId: string, amount: -1|1 ) => void;
//   total: number
};

const initialState: CartType = {
    items: []
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        updateItem: (state, action) => {
            state.items = action.payload
        }
    }
})

export const {updateItem} = cartSlice.actions

export const getItems = (state :any) => state.cart.items

export default cartSlice.reducer
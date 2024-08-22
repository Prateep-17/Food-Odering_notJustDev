import { createSlice } from "@reduxjs/toolkit";

type OrderType = {
    orders: OrderType[]
}
const initialState :OrderType = {
    orders: []
}

const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        setOrder: (state,action) =>{
            state.orders = action.payload
        }
    },
})

export const { setOrder } = orderSlice.actions

export const getOrders = (state :any) => state.order.orders

export default orderSlice.reducer
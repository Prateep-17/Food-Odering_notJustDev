import { combineReducers, configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";
import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";

const rootReducer = combineReducers({
    order: orderSlice,
    cart: cartSlice,
    login : loginSlice,
})
export const store = configureStore({reducer: rootReducer})

export type AppDispatch = typeof store.dispatch;
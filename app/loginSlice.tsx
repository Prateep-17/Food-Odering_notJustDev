import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { API_ENDPOINT, Credentials } from "./types";

const initialState :any = {
    userId: null,
    userName: null,
    status : false,
    error: ""
}
export const getUserId = createAsyncThunk('login/getUserId', async(userName :string)=>{
    try {
        const response = await axios.get(API_ENDPOINT+`/users?userName=${userName}`)        
        return response.data
    } catch (error :any) {
        console.log(error);
        
        return error.message;
    }
})

const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        setUserId: (state,action) =>{            
            state.userId = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(getUserId.pending, (state, action) => {
            state.status = false;
        })
        builder.addCase(getUserId.fulfilled, (state, action) => {
            state.status = true;
            console.log(action.payload[0].userName);
            
            state.userId = action.payload[0].id;
            state.userName = action.payload[0].userName;
        })
        builder.addCase(getUserId.rejected, (state, action) =>{
            state.status = false;
            state.error = action.error.message 
        })
    },
})

export const { setUserId } = loginSlice.actions

export const fetchtUserId = (state: any) => state.login.userId

export const fetchtUserName = (state: any) => state.login.userName

export default loginSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { SignUp,SignIn,LogOut, RefreshUser } from "./operations";


const initialState = {

    user: {name: null, email: null},
    token: null,
    isLogged: false,
    isRefreshing: null,

}

const authSlice = createSlice({

    name: 'auth',
    initialState,
    
    reducers: {},

    extraReducers: builder => {

        builder
        .addCase(RefreshUser.pending, state => {

            state.isRefreshing = true;
        })
        .addCase(RefreshUser.rejected, state => {

            state.isRefreshing = false;
            state.isLogged = false; 
        })
        .addCase(SignUp.fulfilled, (state,action) => {

            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
        })
        .addCase(SignIn.fulfilled, (state, action) => {

            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
        })
        .addCase(LogOut.fulfilled, state => {

            state.user = {name: null, email: null};
            state.token = null;
            state.isLogged = false;
        })
      
        .addCase(RefreshUser.fulfilled, (state,action) => {

            state.user = action.payload;
            state.isLogged = true;
            state.isRefreshing = false;
        })
    }
});

export const authReducer = authSlice.reducer;
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



const authInstance = axios.create({

    baseURL: 'https://connections-api.herokuapp.com',
});

const setAuthToken = token => {

    authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthToken = () => {

    
    authInstance.defaults.headers.common.Authorization = '';

}

export const SignUp = createAsyncThunk(

    '/auth/signup',
    async (credentials,thunkAPI) => {
        try {
    
            const response = await authInstance.post('/users/signup',credentials);
             setAuthToken(response.data.token);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }

)

export const SignIn = createAsyncThunk(

    '/auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await authInstance.post('/users/login', credentials);
            setAuthToken(response.data.token);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const LogOut = createAsyncThunk(

    '/auth/logout',

    async (_, thunkAPI) => {

        try {
 
            await authInstance.post('/users/logout'); 
            clearAuthToken();
        } catch(error) { 
            
          return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const RefreshUser = createAsyncThunk(
    '/auth/refresh',

    async (_,thunkAPI) => {

        const {token} = thunkAPI.getState().auth;

        if(token === null) {

            return thunkAPI.rejectWithValue("Unable to fetch user");
        }

        setAuthToken(token);
    
    try {

        const response = await axios.get('users/current');
        return response.data;

    } catch (error) {

        return thunkAPI.rejectWithValue(error.message);
    }
})
 
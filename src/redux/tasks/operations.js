import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

   
const taskInstance = axios.create({

  baseURL: 'https://652ab4a14791d884f1fd40b2.mockapi.io',
})



export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await taskInstance.get('/tasks');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
      const response = await taskInstance.post('/tasks', { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await taskInstance.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  'tasks/toggleCompleted',
  async (task, thunkAPI) => {
    try {
      const response = await taskInstance.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

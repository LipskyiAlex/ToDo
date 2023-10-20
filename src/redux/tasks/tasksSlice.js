import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';
// import { nanoid } from 'nanoid';

const taskInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {

    state.isLoading = true;
}

const handleRejected = (state,action) => {

    state.isLoading = false;
    state.error = action.payload;
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: taskInitialState,

  extraReducers: {

    [fetchTasks.pending]: handlePending,
    [addTask.pending]: handlePending,
    [deleteTask.pending]: handlePending,
    [toggleCompleted.pending]: handlePending,

    
    [fetchTasks.rejected]: handleRejected,
    [addTask.rejected]: handleRejected,
    [deleteTask.rejected]: handleRejected,
    [toggleCompleted.rejected]: handleRejected,


    [fetchTasks.fulfilled](state, {payload}) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    
    [addTask.fulfilled](state, {payload}) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    
    [deleteTask.fulfilled](state, {payload}) {
      state.isLoading = false;
      state.error = null;

      const index = state.items.findIndex(task => task.id === payload.id);
      state.items.splice(index, 1);
    },
    
    [toggleCompleted.fulfilled](state, {payload}) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === payload.id
      );
      state.items.splice(index, 1,payload);
    },

  },
});

export const tasksReducer = tasksSlice.reducer;

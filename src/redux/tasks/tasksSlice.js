import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

const taskInitialState = {
  items: [],
  isLoading: false,
  error: null,
};


const tasksSlice = createSlice({
  name: 'tasks',
  initialState: taskInitialState,

  extraReducers: (builder) => {

    builder
    .addCase(fetchTasks.pending, (state) => {

      state.isLoading = true;
    } )

     .addCase(addTask.pending, (state) => {

      state.isLoading = true;
     })
     .addCase(deleteTask.pending, (state) => {
      state.isLoading = true;
      
     })
     .addCase(toggleCompleted.pending, (state) => {

      state.isLoading = true;
     })

      .addCase(fetchTasks.rejected, (state,action) => {

        state.isLoading = false;
        state.error = action.payload;
      })

  
      .addCase(fetchTasks.fulfilled, (state,action) => {

        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addCase(addTask.fulfilled, (state,action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);

      })

      .addCase(deleteTask.fulfilled, (state,action) => {

           state.isLoading = false;
          state.error = null;
         const index = state.items.findIndex(task => task.id === action.payload.id);
         state.items.splice(index,1);
      })
       
      .addCase(toggleCompleted.fulfilled, (state,action) => {
        state.isLoading = false;
        state.error = null;
              const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1,action.payload);
      })

  },
});

export const tasksReducer = tasksSlice.reducer;

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


    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const index = state.items.findIndex(task => task.id === action.payload.id);
      state.items.splice(index, 1);
    },
    
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },

    
    // addTask: {

    //     reducer(state,action) {

    //         state.push(action.payload)
    //     },
    //     prepare(text) {

    //         return {

    //             payload: {

    //                 text,
    //                 id: nanoid(),
    //                 completed:false
    //             },
    //         }
    //     },
    // },

    // deleteTask: {

    //     reducer(state,action) {

    //         const index = state.findIndex(task => task.id === action.payload);
    //         state.splice(index,1);
    //     }
    // },

    // toggleCompleted(state, action) {
    //     for (const task of state) {
    //       if (task.id === action.payload) {
    //         task.completed = !task.completed;
    //         break;
    //       }
    //     }
    //   },
  },
});

export const tasksReducer = tasksSlice.reducer;

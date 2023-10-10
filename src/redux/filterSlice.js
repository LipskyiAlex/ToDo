import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";


const filtersInitialState = {
    status: statusFilters.all,
  };

  
  const filterSlice = createSlice({

    name:'filters',
    initialState: filtersInitialState,

    reducers: {

        setStatusFilter: {

            reducer(state,action) {

                state.status = action.payload
            },
        },
    },
  });

  export const {setStatusFilter} = filterSlice.actions;

  export const filtersReducer =filterSlice.reducer;
  


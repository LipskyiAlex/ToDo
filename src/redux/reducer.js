// import { createReducer } from '@reduxjs/toolkit';
// import { statusFilters } from './constants';
// import { addTask,deleteTask,toggleCompleted,setStatusFilter } from './actions';
// import { createSlice } from '@reduxjs/toolkit';

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: false },
//   { id: 1, text: 'Get good at JavaScript', completed: false },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];


// const tasksSlice = createSlice({

//   name: 'tasks',

//   initialState: tasksInitialState,

//   reducers: {

//     addTask(state,action) {

//       state.push(action.payload);
//     },

//     deleteTask(state,action) {

//       const index = state.findIndex(task => task.id===action.payload);

//       state.splice(index,1);

//     },

//     toggleCompleted(state,action) {

//       for(const task of state) {

//         if(task.id === action.payload) {

//           task.completed = !task.completed
//           break;
//         }
//     }

//   },
// });

// export const taskReducer = createReducer(tasksInitialState, {

//   [addTask] : (state,action) => {

//     state.push(action.payload);
//     // return [...state, action.payload]
//   },

//   [deleteTask] : (state, action) => {

//      const index = state.findIndex(task => task.id===action.payload);

//      state.splice(index,1);
    
//     //  return state.filter(task => task.id !== action.payload)
//   },

//   [toggleCompleted] : (state, action) => {

//           for(const task of state) {

//             if(task.id === action.payload) {

//               task.completed = !task.completed
//               break;
//             }
//           }

    // return state.map(task => {

    //   if(task.id != action.payload) {

    //     return task;
    //   }

    //   return {...task, completed: task.completed}
    // })
//   },
  
// });
  // switch (
  //   action.type // Редюсер различает экшены по значению свойства type
  // ) {
  //   case addTask.type: 
  //     // В зависимости от типа экшена будет выполняться разная логика
  //     return [...state, action.payload];

  //   case deleteTask.type:
  //        return state.filter(task => task.id !== action.payload);

  //   case toggleCompleted.type:
  //     return state.map(task => {
  //       if (task.id !== action.payload) {
  //         return task;
  //       }

  //       return { ...task, completed: !task.completed };
  //     });

  // }


// const filterInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = createReducer(filterInitialState, {
      
//       [setStatusFilter] : (state,action) => {

//         state.status = action.payload;
        // return {

        //   ...state,
        //   status: action.payload
        // }
      // }
  // switch (action.type) {
  //   case setStatusFilter.type: // В зависимости от типа экшена будет выполняться разная логика
  //     return {
  //       // Нужно вернуть новый объект состояния

  //       ...state, // в котором есть все данные существующего состояния

  //       status: action.payload,
  //     };

  //   default:
  //     // Каждый редюсер получает все экшены отправленные в стор.
  //     // Если редюсер не должен обрабатывать какой-то тип экшена,
  //     // необходимо вернуть существующее состояние без изменений.

  //     return state;
  // });

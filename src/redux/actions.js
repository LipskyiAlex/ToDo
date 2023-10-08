import { nanoid } from 'nanoid';

export const addTask = text => { 
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),    // В реальных проектах, задачами присвоения id занимается бекенд
      completed: false,
      text,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};

// const addTask = {
//     type: 'tasks/addTask',
//     payload: {
//       id: 'Generated id',
//       text: 'User enered text',
//       completed: false,
//     },
//   };

//   const deleteTask = {
//     type: 'tasks/deleteTask',
//     payload: 'Task id',
//   };

//   const toggleCompleted = {
//     type: 'tasks/toggleCompleted',
//     payload: 'Task id',
//   };

//   const setStatusFilter = {
//     type: 'filters/setStatusFilter',
//     payload: 'Filter value',
//   };

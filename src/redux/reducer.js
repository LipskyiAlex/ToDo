import { statusFilters } from './constants';
import { combineReducers } from 'redux';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: false },
  { id: 1, text: 'Get good at JavaScript', completed: false },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const taskReduser = (state = tasksInitialState, action) => {
  switch (
    action.type // Редюсер различает экшены по значению свойства type
  ) {
    case 'tasks/addTasks': // В зависимости от типа экшена будет выполняться разная логика
      return [...state, action.payload];

    case 'tasks/deleteTask':
      return state.tasks.filter(task => task.id !== action.payload);

    case 'tasks/toggleCompleted':
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }

        return { ...task, completed: !task.completed };
      });

    default:
      return state;
  }
};

const filterInitialState = {
  status: statusFilters.all,
};

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter': // В зависимости от типа экшена будет выполняться разная логика
      return {
        // Нужно вернуть новый объект состояния

        ...state, // в котором есть все данные существующего состояния

        status: action.payload,
      };

    default:
      // Каждый редюсер получает все экшены отправленные в стор.
      // Если редюсер не должен обрабатывать какой-то тип экшена,
      // необходимо вернуть существующее состояние без изменений.

      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: taskReduser,
  filters: filterReducer,
});

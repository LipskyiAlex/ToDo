import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer} from "./tasks/tasksSlice";
import { filtersReducer } from "./tasks";
import { authReducer } from "./auth";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {

  key:'auth',
  storage,
};

export const store = configureStore({

  reducer: {

    tasks:tasksReducer,
    filters: filtersReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === 'development',
});


export const persistor = persistStore(store);

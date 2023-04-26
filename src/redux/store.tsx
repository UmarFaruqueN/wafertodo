import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todos";

const store = configureStore({
     reducer: {
          todo: TodoReducer,
     },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

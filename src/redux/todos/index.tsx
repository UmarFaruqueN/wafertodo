import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = { id: string; title: string; data: string; done: string };

type InitialState = {
     todo: Todo[] | null;
};

const initialState: InitialState = { todo: null };

const todoSlice = createSlice({
     name: "todo",
     initialState,
     reducers: {
          getTodo: (state, action: PayloadAction<[] | any>) => {
               state.todo = action.payload;
          },
     },
});

export default todoSlice.reducer;
export const { getTodo } = todoSlice.actions;

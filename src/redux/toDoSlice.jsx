import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "toDos",
  initialState: [
    { id: 1, title: "toDo1", completed: false },
    { id: 2, title: "toDo2", completed: false },
    { id: 3, title: "toDo3", completed: true },
  ],
  reducers: {
    addToDo: (state, action) => {
      const newToDo = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newToDo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((toDo) => toDo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

export const { addToDo, toggleComplete } = toDoSlice.actions;

export default toDoSlice.reducer;

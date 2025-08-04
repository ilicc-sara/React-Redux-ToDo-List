import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: true },
  { id: 4, title: "todo4", completed: false },
  { id: 5, title: "todo5", completed: false },
];

const toDoSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      // console.log("stejt", state, "ekšn", action);
      state.push({
        title: action.payload,
        id: crypto.randomUUID(),
        completed: false,
      });
    },
    toggleCheckToDo: (state, action) => {
      console.log(state.find((toDo) => toDo.id === action.payload.id));
      //   const index = state.findIndex((toDo) => toDo.id === action.payload.id);
      //   return (state[index] = {
      //     title: action.payload.title,
      //     id: action.payload.id,
      //     completed: !action.payload.completed,
      //   });
    },
    deleteToDo: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

export const { addToDo, toggleCheckToDo, deleteToDo } = toDoSlice.actions;
export default toDoSlice.reducer;

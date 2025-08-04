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
  },
});

export const { addToDo } = toDoSlice.actions;
export default toDoSlice.reducer;

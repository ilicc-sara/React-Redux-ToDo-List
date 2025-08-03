import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getToDosAsync = createAsyncThunk(
  "todos/getToDosAsync",
  async () => {
    const response = await fetch("http://localhost:7000/todos");
    if (response.ok) {
      const todos = await response.json();
      return { todos };
    }
  }
);

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
    deleteToDo: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getToDosAsync.fulfilled, (state, action) => {
      return action.payload.todos;
    });
  },
});

export const { addToDo, toggleComplete, deleteToDo } = toDoSlice.actions;

export default toDoSlice.reducer;

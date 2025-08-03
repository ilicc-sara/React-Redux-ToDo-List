import { createSlice, createAsyncThunk, compose } from "@reduxjs/toolkit";

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

export const addToDosAsync = createAsyncThunk(
  "todos/addToDosAsync",
  async (payload) => {
    const response = await fetch("http://localhost:7000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: payload.title }),
    });

    if (response.ok) {
      const todo = await response.json();
      return { todo };
    }
  }
);

export const toggleCompleteAsync = createAsyncThunk(
  "todos/completeToDoAsync",
  async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: payload.completed }),
    });

    if (response.ok) {
      const todo = await response.json();
      return { id: todo.id, completed: todo.completed };
    }
  }
);

// const resp = await fetch(`http://localhost:7000/todos/${payload.id}`, {
//   method: "DELETE",
// });

export const deleteToDoAsync = createAsyncThunk(
  "todos/deleteToDoAsync",
  async (payload) => {
    const response = await fetch(`http://localhost:7000/${payload.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: payload.id }),
    });

    if (response.ok) {
      const todo = await response.json();
      // return { ...todo.filter((toDo) => toDo.id === payload.id) };
      return { todo };
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
    builder.addCase(getToDosAsync.pending, (state, action) => {
      console.log("fetching data...");
    });
    builder.addCase(getToDosAsync.fulfilled, (state, action) => {
      console.log("fetched data successfully");
      return action.payload.todos;
    });
    builder.addCase(addToDosAsync.fulfilled, (state, action) => {
      state.push(action.payload.todo);
    });
    builder.addCase(toggleCompleteAsync.fulfilled, (state, action) => {
      const index = state.findIndex((toDo) => toDo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    });
    builder.addCase(deleteToDoAsync.fulfilled, (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload.id);
    });
  },
});

export const { addToDo, toggleComplete, deleteToDo } = toDoSlice.actions;

export default toDoSlice.reducer;

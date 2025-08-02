import { useState } from "react";
import "./App.css";
import AddToDoForm from "./AddToDoForm";
import ToDoList from "./ToDoList";
import TotalCompleteItems from "./TotalCompleteItems";

function App() {
  return (
    <div className="container">
      <h1>My ToDo List</h1>
      <AddToDoForm />
      <ToDoList />
      <TotalCompleteItems />
    </div>
  );
}

export default App;

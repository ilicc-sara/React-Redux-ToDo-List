import React, { useEffect } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const toDos = [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
    { id: 4, title: "todo4", completed: false },
    { id: 5, title: "todo5", completed: false },
  ];
  return (
    <ul className="list-group">
      {toDos.map((toDo, index) => (
        <ToDoItem
          key={index}
          id={toDo.id}
          title={toDo.title}
          completed={toDo.completed}
        />
      ))}
    </ul>
  );
};

export default ToDoList;

import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const toDos = [
    { id: 1, title: "toDo1", completed: false },
    { id: 2, title: "toDo2", completed: false },
    { id: 3, title: "toDo3", completed: false },
    { id: 4, title: "toDo4", completed: false },
    { id: 5, title: "toDo5", completed: false },
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

import React from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const toDos = useSelector((state) => state.toDos);

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

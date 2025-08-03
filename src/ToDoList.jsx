import React, { useEffect } from "react";
import ToDoItem from "./ToDoItem";
import { useSelector, useDispatch } from "react-redux";
import { getToDosAsync } from "./redux/toDoSlice";

const ToDoList = () => {
  const dispatch = useDispatch();

  const toDos = useSelector((state) => state.toDos);

  useEffect(() => {
    dispatch(getToDosAsync());
  }, [dispatch]);

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

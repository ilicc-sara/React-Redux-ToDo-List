import React from "react";
import { useDispatch } from "react-redux";
// import { toggleComplete, deleteToDo } from "./redux/toDoSlice";
// import { toggleCompleteAsync, deleteToDo } from "./redux/toDoSlice";
import { toggleCompleteAsync, deleteToDoAsync } from "./redux/toDoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(
      toggleCompleteAsync({
        id: id,
        completed: !completed,
      })
    );
  };

  const handleDeleteClick = () => {
    dispatch(
      deleteToDoAsync({
        id: id,
      })
    );
  };

  return (
    <li className={`${completed ? "list-item completed" : "list-item"}`}>
      <div>
        <span>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleCompleteClick}
          ></input>
          {title}
        </span>
        <button className="btn" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

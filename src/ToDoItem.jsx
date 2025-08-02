import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete } from "./redux/toDoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(
      toggleComplete({
        id: id,
        completed: !completed,
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
        <button className="btn">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;

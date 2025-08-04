import React from "react";
import { useDispatch } from "react-redux";
import { toggleCheckToDo, deleteToDo } from "./redux/slice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className={`${completed ? "list-item completed" : "list-item"}`}>
      <div>
        <span>
          <input
            type="checkbox"
            checked={completed}
            onChange={() =>
              dispatch(toggleCheckToDo({ id, completed: !completed }))
            }
          ></input>
          {title}
        </span>
        <button className="btn" onClick={() => dispatch(deleteToDo({ id }))}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

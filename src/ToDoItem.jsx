import React from "react";
import { useDispatch } from "react-redux";
import { toggleCheckToDo, deleteToDo } from "./redux/slice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  // console.log(dispatch(toggleCheckToDo(id)));

  return (
    <li className={`${completed ? "list-item completed" : "list-item"}`}>
      <div>
        <span>
          <input type="checkbox" checked={completed}></input>
          {title}
        </span>
        <button className="btn" onClick={() => dispatch(deleteToDo(id))}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

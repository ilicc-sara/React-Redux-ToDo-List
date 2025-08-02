import React from "react";

const TodoItem = ({ id, title, completed }) => {
  return (
    <li>
      <div>
        <span>
          <input type="checkbox" checked={completed}></input>
          {title}
        </span>
        <button className="btn">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;

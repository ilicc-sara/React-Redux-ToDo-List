import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "./redux/toDoSlice";

function AddToDoForm() {
  const [value, setValue] = useState("");
  console.log(value);

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addToDo({
        title: value,
      })
    );
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <label>Name</label>
      <input
        className="input-todo"
        type="text"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default AddToDoForm;

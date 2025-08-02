import React, { useState } from "react";

function AddToDoForm() {
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("user entered: " + value);
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

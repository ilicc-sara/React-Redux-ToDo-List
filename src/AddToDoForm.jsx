import React, { useState } from "react";

function AddToDoForm() {
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("user entered: " + value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input
        type="text"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddToDoForm;

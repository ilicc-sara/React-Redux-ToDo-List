import React from "react";
import { useSelector } from "react-redux";

function TotalCompleteItems(props) {
  const completedToDos = useSelector((state) =>
    state.toDos.filter((toDo) => toDo.completed === true)
  );
  return <h4>Total Complete Items: {completedToDos.length}</h4>;
}

export default TotalCompleteItems;

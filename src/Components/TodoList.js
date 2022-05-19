import React from "react";

function TodoList(props) {
  return (
    <div className="list-div">
        <h1 style={{color:"blue"}}>Your Lists :</h1>
      {props.data.map((todo, index) => (
        <h1 key={index}>{todo}</h1>
      ))}
    </div>
  );
}

export default TodoList;

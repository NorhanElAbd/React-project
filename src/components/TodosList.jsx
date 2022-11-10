import React from "react";
import { useState } from "react";


function TodosList({ todos }) {

  return (
    <ul>
      {todos?.map((todo, index) => (
        <li
          key={index}
        >
          {todo}
        </li>
      ))}
    </ul>
  );
}

export default TodosList;
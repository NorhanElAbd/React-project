import React from "react";
import { useState } from "react";


function TodosList({ todos }) {
  
  // 1- Ul LI only
  // 2- props loop and keys

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
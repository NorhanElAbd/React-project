import React, { useState } from "react"
import Header from './Header';
import TodosList from "./TodosList";
import TodoForm from "./TodoForm";

function Page() {

  const [ todos, setTodos ] = useState([]);

  return (
    <div>
      <Header />
      <TodoForm setTodos={setTodos} />
      <TodosList todos={todos} />
    </div>
  );
};

export default Page;
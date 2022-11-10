import React, { useState } from "react"
import Header from './Header';
import TodosList from "./TodosList";
import TodoForm from "./TodoForm";

function Page (){

    const [todos, setTodos] = useState([]);

    // 1- component
    // 2- const todos = ["to do 1, to do 2, to do 3"];
    // 3- states
    
    return (
      <div>
        <Header />
        <TodoForm  setTodos={setTodos} />
        <TodosList todos={todos} />
      </div>
    );
};

export default Page;
import React, { useState } from "react"

function TodoForm({ setTodos }) {

  const [ value, onChange ] = useState();

  function onSubmitHandle() {
    setTodos(prevState => prevState.concat(value));
    onChange("");
  };

  return (
    <form action="#" onSubmit={onSubmitHandle}>
      <input type="input" value={value} onChange={(e) => onChange(e.target.value)} />

      <button>submit</button>
    </form>
  );
};

export default TodoForm;
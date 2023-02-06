import React from "react";

import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }) {
  //enves de props usamos todoContext

  return (
    <h2 className="TodoCounter">completaste {completedTodos} de {totalTodos} todos</h2>
  );
}

export { TodoCounter }; 
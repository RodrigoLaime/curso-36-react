import React from "react";

import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  //enves de props usamos todoContext

  return (
    <h2 className={`TodoCounter ${!!loading} && TodoCounter--loading`}>completaste {completedTodos} de {totalTodos} todos</h2>
  );
}

export { TodoCounter }; 
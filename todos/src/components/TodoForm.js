import React from "react";

export function TodoForm({handleChange, handleSubmit, newTask, dispatch}) {

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        name="task"
        placeholder="Add Task"
        onChange={handleChange}
      />
      <button>Add Task</button>
      <button onClick={() => dispatch({ type: 'CLear_Task' })}>Done</button>
    </form>
  );
}

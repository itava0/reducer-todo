import React from 'react';
import Todo from './Todo';

function TodoList({task, dispatch}) {
  console.log(task)
  return ( 
    <div>
    {task.map(item => (
        <Todo key={item.id} item={item} dispatch={dispatch} />
      ))}
    </div>
   );
}
 
export default TodoList;
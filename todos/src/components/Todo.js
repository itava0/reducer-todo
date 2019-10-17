import React from 'react';
import '../App.css'

const Todo = props => {
  const toggleTask = (item) => {
    props.dispatch({ type: 'Toggle_Task', payload: item})
    console.log(props)
}
  return ( 
    <div
      className={`item${props.item.completed ? ' completed' : ''}`}
      onClick={() => toggleTask(props.item.id)}
    >
      <p>{props.item.task}</p>
    </div>
   );
}
 
export default Todo;
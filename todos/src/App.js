import React, {useState, useReducer} from 'react';
import {initialState, reducer} from './reducers/TodoReducer';
import TodoList from './components/TodoList';
import {TodoForm} from './components/TodoForm';
import Todo from './components/Todo';



function App() {
  const [task, dispatch] = useReducer(reducer, initialState);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'Add_Task', payload: newTask })
    setNewTask('');
  }

  return (
    <div>
    <h2>Welcome to your Todo App!</h2>
    <TodoList task={task} dispatch={dispatch}/>
    <TodoForm handleChange={handleChange} handleSubmit={handleSubmit} newTask={newTask} dispatch={dispatch}/>
    </div>
  );
}

export default App;

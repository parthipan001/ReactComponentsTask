import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (task) => {
    setTodos([...todos, { ...task, id: Date.now() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id) => {
    const name = prompt("Enter new name:");
    const description = prompt("Enter new description:");
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, name, description } : todo)));
  };

  const updateStatus = (id, status) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, status } : todo)));
  };

  return (
    <div>
      <h1>My todo</h1>
      <TodoForm addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        updateStatus={updateStatus}
        filter={filter}
      />
    </div>
  );
};

export default App;
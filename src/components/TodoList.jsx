import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, editTodo, updateStatus, filter }) => {
  return (
    <div>
      {todos
        .filter(todo => filter === 'All' || todo.status === filter)
        .map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            updateStatus={updateStatus}
          />
      ))}
    </div>
  );
};

export default TodoList;
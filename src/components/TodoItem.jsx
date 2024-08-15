// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, deleteTodo, editTodo, updateStatus }) => {
  const { id, name, description, status } = todo; // Destructure the todo object

  return (
    <div className="todo-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        Status: 
        <select value={status} onChange={(e) => updateStatus(id, e.target.value)}>
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button onClick={() => editTodo(id)} aria-label={`Edit ${name}`}>Edit</button>
      <button onClick={() => deleteTodo(id)} aria-label={`Delete ${name}`}>Delete</button>
    </div>
  );
};

// Optional: Add prop types validation
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['Not Completed', 'Completed']).isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
};

export default TodoItem;
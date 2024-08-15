import { useState } from 'react';
import PropTypes from 'prop-types'; // Optional: For prop types validation

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState({ name: '', description: '', status: 'Not Completed' });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.trim() && task.description.trim()) {
      addTodo(task);
      setTask({ name: '', description: '', status: 'Not Completed' });
    } else {
      // Optional: Provide user feedback for invalid form submission
      alert("Please fill in both the task name and description.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Todo Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Todo Name"
          value={task.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Todo Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Todo Description"
          value={task.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

// Optional: Add prop types validation
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
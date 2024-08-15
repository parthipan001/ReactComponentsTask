// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types"; // Optional: For prop types validation

const Filter = ({ setFilter }) => {
  return (
    <div>
      <label htmlFor="status-filter">Status Filter: </label>
      <select id="status-filter" onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
};

// Optional: Add prop types validation
Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
import React from 'react';
import './style.css'; // Import your CSS file

const CustomSelect = () => {
  return (
    <div className="custom-select">
      <select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default CustomSelect;
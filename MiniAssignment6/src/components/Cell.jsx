import React, { useState } from 'react';
import PropTypes from 'prop-types';  
import './Cell.css';


const Cell = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  
  const handleClick = () => {
    setIsOn((prev) => !prev); 
    onToggle(!isOn);           
  };

  return (
    
    <div
      onClick={handleClick} 
      // Apply the "on" class if the cell is "on"              
      className={`cell ${isOn ? 'on' : ''}`} 
    />
  );
};

// Validate props to ensure `onToggle` is passed and is a function
Cell.propTypes = {
  onToggle: PropTypes.func.isRequired, 
};

export default Cell;


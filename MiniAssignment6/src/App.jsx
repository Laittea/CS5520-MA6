import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cell from './components/Cell';
import './App.css';

const App = () => {
  const [onCount, setOnCount] = useState(0);

  
  const handleToggle = (isOn) => {
    setOnCount((prevCount) => (isOn ? prevCount + 1 : prevCount - 1));
  };

  return (
    <div className="app">
      <h2>Count: {onCount}</h2>
      <div className="grid">
        <Cell onToggle={handleToggle} />
        <Cell onToggle={handleToggle} />
        <Cell onToggle={handleToggle} />
        <Cell onToggle={handleToggle} />
      </div>
    </div>
  );
};


App.propTypes = {
  handleToggle: PropTypes.func.isRequired,  
};

export default App;

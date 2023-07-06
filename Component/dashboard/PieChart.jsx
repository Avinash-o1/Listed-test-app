import React from 'react';
import './dashboard.css';

const PieChart = () => {
  return (
    <div className="container">
      <div className="slice" id="sliceA">
        <span className="label"></span>
      </div>
      <div className="slice" id="sliceB">
        <span className="label"></span>
      </div>
      <div className="slice" id="sliceC">
        <span className="label"></span>
      </div>
    </div>
  );
};

export default PieChart;

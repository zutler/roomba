import React from 'react';

const Toolbar = ({ moveRobot, rotateRobot, resetRobot, message }) => {
  return (
    <div className="toolbar">
      <button onClick={moveRobot}>Move</button>
      <button onClick={rotateRobot}>Rotate</button>
      <button onClick={resetRobot}>Reset</button>
      <div className="message">{message}</div>
    </div>
  );
};

export default Toolbar;

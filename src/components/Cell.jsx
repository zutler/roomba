import React from 'react';

const Cell = ({ isRobot, rotation }) => {
  return (
    <div className="cell">
      {isRobot && (
        <div className="robot" style={{ transform: `rotate(${rotation}deg)` }}>
          ➤
        </div>
      )}
    </div>
  );
};

export default Cell;

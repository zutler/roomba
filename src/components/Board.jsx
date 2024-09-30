import React from 'react';
import Cell from './Cell';

const Board = ({ position, rotation }) => {
  const grid = Array(10)
    .fill(null)
    .map((_, col) => (
      <div className="row" key={col}>
        {Array(10)
          .fill(null)
          .map((_, row) => (
            <Cell
              key={`${row}-${col}`}
              isRobot={col === position.x && row === position.y} // map x to columns and y to rows
              rotation={rotation}
            />
          ))}
      </div>
    ));

  return <div className="board">{grid}</div>;
};

export default Board;

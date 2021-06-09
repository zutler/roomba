import { useState } from 'react';
import Roomba from './Roomba';

const Board = () => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [move, setMove] = useState({ x: 1, y: 1 });
  const [direction, setDirection] = useState(0);

  const forward = () => {
    if (direction === 0 && move.x < 10) {
      setMove({ x: ++move.x, y: move.y });
    }
    if (direction === 90 && move.y < 10) {
      setMove({ x: move.x, y: ++move.y });
    }
    if (direction === 180 && move.x > 1) {
      setMove({ x: --move.x, y: move.y });
    }
    if (direction === 270 && move.y > 1) {
      setMove({ x: move.x, y: --move.y });
    }
  };

  const turn = () => {
    const updateDirection = direction + 90;

    setDirection(
      updateDirection >= 360 ? updateDirection - 360 : updateDirection
    );
  };

  const reset = () => {
    setMove({ x: 1, y: 1 });
    setDirection(0);
  };

  return (
    <div className="box">
      <div className="center">
        <aside className="toolbar">
          <button className="btn" onClick={() => forward()}>
            forward
          </button>
          <button className="btn" onClick={() => turn()}>
            turn
          </button>
          <button className="btn" onClick={() => reset()}>
            reset
          </button>
        </aside>
        {columns.map((column) => (
          <div key={column} className="row">
            {rows.map((row) => {
              let content = `${column} : ${row}`;
              if (row === move.x && column === move.y) {
                content = <Roomba direction={direction} />;
              }
              return (
                <div key={row} className="column">
                  {content}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;

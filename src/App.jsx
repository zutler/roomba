import React, { useState } from 'react';
import Board from './components/Board';
import Toolbar from './components/Toolbar';
import './style.css';

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0); // 0 (right), 90 (down), 180 (left), 270 (up)
  const [message, setMessage] = useState('');

  const moveRobot = () => {
    let { x, y } = position;
    const newPosition = { x, y };

    switch (rotation) {
      case 0: // Move right (increase x)
        if (x < 9) {
          newPosition.x += 1;
          setMessage('');
        } else {
          setMessage('The robot hit the wall. Please make a turn.');
        }
        break;
      case 90: // Move down (increase y)
        if (y < 9) {
          newPosition.y += 1;
          setMessage('');
        } else {
          setMessage('The robot hit the wall. Please make a turn.');
        }
        break;
      case 180: // Move left (decrease x)
        if (x > 0) {
          newPosition.x -= 1;
          setMessage('');
        } else {
          setMessage('The robot hit the wall. Please make a turn.');
        }
        break;
      case 270: // Move up (decrease y)
        if (y > 0) {
          newPosition.y -= 1;
          setMessage('');
        } else {
          setMessage('The robot hit the wall. Please make a turn.');
        }
        break;
      default:
        break;
    }

    setPosition(newPosition);
  };

  const rotateRobot = () => {
    setRotation((prev) => (prev + 90) % 360);
    setMessage('');
  };

  const resetRobot = () => {
    setPosition({ x: 0, y: 0 });
    setRotation(0);
    setMessage('');
  };

  return (
    <div className='wrapper'>
      <Toolbar 
        moveRobot={moveRobot} 
        rotateRobot={rotateRobot} 
        resetRobot={resetRobot} 
        message={message} 
      />
      <Board position={position} rotation={rotation} />
    </div>
  );
};

export default App;

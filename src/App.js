import React, { useState } from 'react';

const Squares = () => {
  const [color1, setColor1] = useState('red');
  const [color2, setColor2] = useState('blue');

  const SquareClick = (square) => {
    if (square === 1) {
      setColor1(color1 === 'red' ? 'blue' : 'red');
    } else if (square === 2) {
      setColor2(color2 === 'blue' ? 'red' : 'blue');
    }
  };

  return (
    <div style={{display: 'flex', gap: '20px'}}>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color1,
          cursor: 'pointer'
        }}
        onClick={() => SquareClick(1)}
      ></div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color2,
          cursor: 'pointer'
        }}
        onClick={() => SquareClick(2)}
      ></div>
    </div>
  );
};

export default Squares;
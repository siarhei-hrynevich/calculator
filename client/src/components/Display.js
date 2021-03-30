import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const Display = () => {
  const { number } = useContext(NumberContext);
  return (
    <div>
      <h2>{number}</h2>
      <p>Enter Some Numbers</p>
    </div>
  );
};

export default Display;
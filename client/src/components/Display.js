import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const Display = () => {
  const { number } = useContext(NumberContext);
  return (
    <div class="result-field">
      <span>{number}</span>
      <p>Enter Some Numbers</p>
    </div>
  );
};

export default Display;
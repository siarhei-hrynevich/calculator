import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const FunctionButton = ({ buttonValue }) => {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button class="column  operation-button" onClick={() => handleSetCalcFunction(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default FunctionButton;
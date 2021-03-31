import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');

  const handleSetDisplayValue = num => {
  };

  const handleSetStoredValue = () => {
  };

  const handleClearValue = () => {
  };

  const handleSetCalcFunction = type => {
  };

  const handleToggleNegative = () => {
  };

  const doMath = () => {
  };

  return (
    <NumberContext.Provider
      value={{
        doMath,
        functionType,
        handleClearValue,
        handleSetCalcFunction,
        handleSetDisplayValue,
        handleSetStoredValue,
        handleToggleNegative,
        number,
        storedNumber,
        setNumber,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
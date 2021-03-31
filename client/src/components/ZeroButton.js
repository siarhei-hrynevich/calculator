import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const ZeroButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button type='button' class="column wide-button number-button" onClick={() => handleSetDisplayValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default ZeroButton;
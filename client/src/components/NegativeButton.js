import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NegativeButton = ({ buttonValue }) => {
    const { handleToggleNegative } = useContext(NumberContext);
    return (
        <button type="button" class="column action-button" onClick={() => handleToggleNegative(buttonValue)}>
            {buttonValue}
        </button>
    );
};

export default NegativeButton;
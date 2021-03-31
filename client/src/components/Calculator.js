import React from 'react';
import NumberButton from './NumberButton';
import FunctionButton from './FunctionButton';
import Display from './Display';
import EqualButton from './EqualButton';
import NegativeButton from './NegativeButton';
import ZeroButton from './ZeroButton';
import './styles/Styles.css'

const Calculator = () => (
    <div>
        <div>
            <h1>CALC-U-LATOR</h1>
            <Display />
        </div>
        <div class="buttons">
            <div class="row">
                <NegativeButton buttonValue='C' />
                <NegativeButton buttonValue='-/+' />
                <NegativeButton buttonValue='%' />
                <FunctionButton buttonValue='/' />
            </div>
            <div class="row">
                <NumberButton buttonValue={7} />
                <NumberButton buttonValue={8} />
                <NumberButton buttonValue={9} />
                <FunctionButton buttonValue='*' />
            </div>
            <div class="row">
                <NumberButton buttonValue={4} />
                <NumberButton buttonValue={5} />
                <NumberButton buttonValue={6} />
                <FunctionButton buttonValue='-' />
            </div>
            <div class="row">
                <NumberButton buttonValue={1} />
                <NumberButton buttonValue={2} />
                <NumberButton buttonValue={3} />
                <FunctionButton buttonValue='+' />
            </div>
            <div class="row">
                <ZeroButton buttonValue={0} />
                <NumberButton buttonValue='.' />
                <EqualButton />
            </div>
        </div>
    </div>
);

export default Calculator;
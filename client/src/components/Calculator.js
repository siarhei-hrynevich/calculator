import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import Row from './Row';
import './styles/Styles.css'

const Calculator = () => {
    const [number, setNumber] = useState('');
    const handlerNumber = (el) => {
        if (number.length < 10)
            setNumber(`${number}${el}`);
    }
    const handlerFunc = (el) => {
        console.log(el);
    }
    const handlerClear = () => {
        setNumber('');
    }

    return (
        <div>
            <div>
                <Display value={number} />
            </div>
            <div className="buttons">
                <Row>
                    <Button buttonValue='C' buttonType='action-button' handler={handlerClear} />
                    <Button buttonValue='-/+' buttonType='action-button' handler={handlerFunc} />
                    <Button buttonValue='%' buttonType='action-button' handler={handlerFunc} />
                    <Button buttonValue='/' buttonType='operation-button' handler={handlerFunc} />
                </Row>
                <Row>
                    <Button buttonValue={7} buttonType='number-button' handler={handlerNumber} />
                    <Button buttonValue={8} buttonType='number-button' handler={handlerNumber} />
                    <Button buttonValue={9} buttonType='number-button' handler={handlerNumber} />
                    <Button buttonValue='*' buttonType='operation-button' handler={handlerFunc} />
                </Row>
                <Row>
                    <Button buttonValue={4} buttonType='number-button' handler={handlerNumber} />
                    <Button buttonValue={5} buttonType='number-button' handler={handlerNumber} />
                    <Button buttonValue={6} buttonType='number-button' handler={handlerNumber} />
                    <Button buttonValue='-' buttonType='operation-button' handler={handlerFunc} />
                </Row>
                <Row>
                    <Button buttonValue={1} buttonType='number-button' handler={handlerNumber} />
                    <Button buttonValue={2} buttonType='number-button' handler={handlerNumber} />
                    <Button buttonValue={3} buttonType='number-button' handler={handlerNumber} />
                    <Button buttonValue='+' buttonType='operation-button' handler={handlerFunc} />
                </Row>
                <Row>
                    <Button buttonValue={0} buttonType='wide-button number-button' handler={handlerNumber} />
                    <Button buttonValue='.' buttonType='action-button' handler={handlerFunc} />
                    <Button buttonValue='=' buttonType='equal-button' handler={handlerFunc} />
                </Row>
            </div>
        </div>
    )
}

export default Calculator;
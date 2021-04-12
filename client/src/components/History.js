import React, { useEffect } from 'react';
import Popup from './Popup';
import { useState } from 'react'

const History = () => {
    const [show, setShow] = useState(false);
    const [history, setHistory] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (show === false || isLoaded) return;
        fetch("api/history/all")
            .then(result => result.json())
            .then(
                (result) => {
                    console.log(result);
                    setHistory(result);
                    setIsLoaded(true);
                },
                (error) => {
                    console.log(error);
                    setIsLoaded(false);
                }
            );
    });

    return (
        <div>
            <Popup title='History' show={show} onClose={() => setShow(false)}>
                {history.map((item) => (<div key={item.id}>{item.operation}</div>))}
            </Popup>
            <button onClick={() => setShow(true)}>Show History</button>
        </div>
    );
}

export default History;
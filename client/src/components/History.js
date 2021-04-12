import React, { useEffect } from 'react';
import Popup from './Popup';
import { useState } from 'react'

const History = () => {
    const [show, setShow] = useState(false);
    const [history, setHistory] = useState([]);

    return (
        <div>
            <Popup title='History' show={show} onClose={() => setShow(false)}>
                {history.map((item) => (<div>{item}</div>))}
            </Popup>
            <button onClick={() => setShow(true)}>Show History</button>
        </div>
    );
}

export default History;
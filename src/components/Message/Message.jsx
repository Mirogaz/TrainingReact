import React from 'react';
import './index.scss'

function Message({ message }) {
    return (
        <div className='message'>
            <p>Привет, {message}!</p>
        </div>
    );
}

export default Message;
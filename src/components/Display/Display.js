import React from 'react';
import './Display.css';

const Display = (props) => {
    const { value } = props;
    return (
        <div className='display'>
            <p data-testid='display'>{value}</p>
        </div>
    )
}

export default Display;
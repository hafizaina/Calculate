import React from 'react';
import Button from '../Button';
import './Numpad.css';

const Numpad = (props) => {
    const { onClick } = props;

    const numpadKeys = [
        'C', '+-', '%', '/',
        '7', '8', '9', 'x',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', '=',
    ];
    return (
        <div className='numpad'>
            {
            numpadKeys.map((numpadKey, index) => {
                let className = (numpadKey === '/' || numpadKey === 'x' || numpadKey === '-' || numpadKey === '+' || numpadKey === '=') ? 'operator' : '';
                if(numpadKey === '0') {
                    className += ' zero';
                }
                return (
                    <React.Fragment key={index}>
                        <Button
                            classname={className}
                            value={numpadKey}
                            onClick={value => onClick(value)}
                        >
                            {numpadKey}
                        </Button>
                    </React.Fragment>
                );
            })
            }
        </div>
    );
}

export default Numpad;
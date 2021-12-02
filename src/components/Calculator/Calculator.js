import React, { useState } from 'react';
import Display from '../Display';
import Numpad from '../Numpad';
import './Calculator.css';

const Calculator = () => {
    const [calc, setCalc] = useState({
        result: 0,
        number: 0,
        operator: ''
    });

    const handleNumpadClick = (button) => {
        switch(button) {
            case 'C':
                handleResetClick(button);
                break;
            case '+-':
                handleInvertClick(button);
                break;
            case '%':
                handlePercentageClick(button);
                break;
            case '=':
                handleEqualsClick(button);
                break;
            case '/':
            case 'x':
            case '-':
            case '+':
                handleOperatorClick(button);
                break;
            case '.':
                handleDecimalClick(button);
                break;
            default:
                handleNumberClick(button);
                break;
        };
    }

    const handleNumberClick = (value) => {
        if(!calc.number || calc.number.toString().length < 9){
            const num = calc.number === 0 && value === '0' ? 0 : // zero check
                        calc.number % 1 === 0 ? Number(calc.number + value) :
                        calc.number + value;
            const result = !calc.operator ? 0 : calc.result;
            setCalc({
                ...calc,
                number: num,
                result: result
            });
        }                
    }

    const handleDecimalClick = (value) => {
        setCalc({
            ...calc,
            number: !calc.number.toString().includes('.') ? calc.number + value : calc.number
        })
    }

    const handleOperatorClick = (value) => {
        setCalc({
            ...calc,
            operator: value,
            result: !calc.result && calc.number ? calc.number : calc.result,
            number: 0
        });
    }

    const handleEqualsClick = () => {
        if(calc.operator && calc.number) {
            const performOperation = (a, b, operator) => {
                switch(operator) {
                    case '+':
                        return a + b;
                    case '-':
                        return a - b;
                    case 'x':
                        return a * b;
                    case '/':
                        return a / b;
                    default:
                        return;
                }
            }

            const result = calc.number === '0' && calc.operator === '/' ? 'Error: Divide by zero.' :
                           performOperation(Number(calc.result), Number(calc.number), calc.operator);

            setCalc({
                ...calc,
                result: result,
                operator: '',
                number: 0
            });
        }
    }

    const handleInvertClick = () => {
        setCalc({
            ...calc,
            number: calc.number ? calc.number * -1 : 0,
            result: calc.result ? calc.result * -1 : 0,
            operator: ''
        });
    }

    const handlePercentageClick = () => {
        let num = calc.number ? parseFloat(calc.number) : 0;
        let res = calc.result ? parseFloat(calc.result) : 0;

        setCalc({
            ...calc,
            number: (num /= Math.pow(100, 1)),
            result: (res /= Math.pow(100, 1)),
            operator: ''
        });
    }

    const handleResetClick = () => {
        setCalc({
            ...calc,
            number: 0,
            result: 0,
            operator: ''
        });
    }

    return (
        <div className='calculator'>
            <Display value={calc.number ? calc.number : calc.result} />
            <Numpad onClick={handleNumpadClick} />
        </div>
    );
}

export default Calculator;
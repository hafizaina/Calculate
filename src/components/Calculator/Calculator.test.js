import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from './Calculator';

describe('Calculator.js Test', () => {
    it('should render 19 buttons', () => {
        render(<Calculator />);
        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBe(19);
    });

    it('should perform addition', () => {
        const { getByTestId } = render(<Calculator />);
        userEvent.click(screen.getByRole('button', {name: '9'}));
        userEvent.click(screen.getByRole('button', {name: '+'}));
        userEvent.click(screen.getByRole('button', {name: '9'}));
        userEvent.click(screen.getByRole('button', {name: '='}));
        expect(getByTestId('display')).toHaveTextContent('18');
    });

    it('should perform subraction', () => {
        const { getByTestId } = render(<Calculator />);
        userEvent.click(screen.getByRole('button', {name: '9'}));
        userEvent.click(screen.getByRole('button', {name: '-'}));
        userEvent.click(screen.getByRole('button', {name: '9'}));
        userEvent.click(screen.getByRole('button', {name: '='}));
        expect(getByTestId('display')).toHaveTextContent('0');
    });

    it('should perform division', () => {
        const { getByTestId } = render(<Calculator />);
        userEvent.click(screen.getByRole('button', {name: '9'}));
        userEvent.click(screen.getByRole('button', {name: '/'}));
        userEvent.click(screen.getByRole('button', {name: '9'}));
        userEvent.click(screen.getByRole('button', {name: '='}));
        expect(getByTestId('display')).toHaveTextContent('1');
    });

    it('should perform multiplication', () => {
        const { getByTestId } = render(<Calculator />);
        userEvent.click(screen.getByRole('button', {name: '9'}));
        userEvent.click(screen.getByRole('button', {name: 'x'}));
        userEvent.click(screen.getByRole('button', {name: '9'}));
        userEvent.click(screen.getByRole('button', {name: '='}));
        expect(getByTestId('display')).toHaveTextContent('81');
    });
});
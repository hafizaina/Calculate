import { render, screen } from '@testing-library/react';
import App from './App';

describe('App.js Test', () => {
  it('should render page title', () => {
    render(<App />);
    const pageTitle = screen.getByText('Caculate.');
    expect(pageTitle).toBeInTheDocument();
  })
});

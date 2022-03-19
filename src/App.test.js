import { render, screen } from '@testing-library/react';
import App from './App';

test('renders index', () => {
  render(<App />);
  const linkElement = screen.getByText(/View Addons/i);
  expect(linkElement).toBeInTheDocument();
});

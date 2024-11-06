// src/App.test.jsx
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { describe, expect, it } from 'vitest';

describe('App Component', () => {
  it('renders the App component with welcome text', () => {
    render(<App />);

    // Use getAllByText and select the first matching element
    const headings = screen.getAllByText((content) => {
      return content.includes('Vite') && content.includes('React');
    });

    expect(headings[0]).toBeInTheDocument(); // This will work once jest-dom is installed and configured
  });

  it('increments counter on button click', () => {
    render(<App />);

    // Find the button by its initial text content
    const button = screen.getByRole('button', { name: /count is 0/i });

    // Verify initial count value
    expect(button).toHaveTextContent('count is 0');

    // Simulate a click event
    fireEvent.click(button);

    // Verify that count increments to 1 after click
    expect(button).toHaveTextContent('count is 1');
  });
});

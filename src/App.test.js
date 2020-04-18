import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Library', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Library/i);
  expect(linkElement).toBeInTheDocument();
});


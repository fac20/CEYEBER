import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders landing page', () => {
  render(<App />);
  getByText('CEYEBER');
});

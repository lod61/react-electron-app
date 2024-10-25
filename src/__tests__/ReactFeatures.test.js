import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactFeatures from '../components/ReactFeatures';

test('renders React Features Demo heading', () => {
  render(<ReactFeatures />);
  const headingElement = screen.getByText(/React Features Demo/i);
  expect(headingElement).toBeInTheDocument();
});

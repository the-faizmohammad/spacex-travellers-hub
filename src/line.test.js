import React from 'react';
import { render } from '@testing-library/react';
import Line from './components/Line';

test('renders Line component', () => {
  const { getByTestId } = render(<Line />);
  const lineElement = getByTestId('line');

  expect(lineElement).toBeInTheDocument();
});

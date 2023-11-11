import React from 'react';
import { render, screen } from '@testing-library/react';
import LogoImg from './components/Logo';

test('renders logo image', () => {
  render(<LogoImg />);
  const logoElement = screen.getByAltText('Space Hub Logo');
  expect(logoElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';

describe('NavBar Component', () => {
  test('renders logo and links', () => {
    render(
      <Router>
        <NavBar />
      </Router>,
    );

    // Check if the logo is rendered
    const logoElement = screen.getByText('Space Travellers Hub');
    expect(logoElement).toBeInTheDocument();

    // Check if all the links are rendered
    const rocketLink = screen.getByRole('link', { name: /rockets/i });
    const missionLink = screen.getByRole('link', { name: /missions/i });
    const dragonLink = screen.getByRole('link', { name: /dragons/i });
    const profileLink = screen.getByRole('link', { name: /my profile/i });

    expect(rocketLink).toBeInTheDocument();
    expect(missionLink).toBeInTheDocument();
    expect(dragonLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });

  test('links have correct paths', () => {
    render(
      <Router>
        <NavBar />
      </Router>,
    );

    // Check if the links have the correct paths
    const rocketLink = screen.getByRole('link', { name: /rockets/i });
    const missionLink = screen.getByRole('link', { name: /missions/i });
    const dragonLink = screen.getByRole('link', { name: /dragons/i });
    const profileLink = screen.getByRole('link', { name: /my profile/i });

    expect(rocketLink).toHaveAttribute('href', '/');
    expect(missionLink).toHaveAttribute('href', '/mission');
    expect(dragonLink).toHaveAttribute('href', '/dragons');
    expect(profileLink).toHaveAttribute('href', '/MyProfile');
  });

  // Add more tests as needed for specific behaviors or interactions
});

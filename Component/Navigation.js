// Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/my-profile-setup" activeClassName="active">
            My Profile - Setup
          </NavLink>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;

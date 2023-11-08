import { NavLink } from 'react-router-dom';
import LogoImg from './Logo';

const NavBar = () => {
  const Links = [
    { path: '/', title: 'Rockets', className: 'navlink' },
    { path: '/mission', title: 'mission', className: 'navlink' },
  ];
  return (
      <nav>
        <div className="logo-section">
        <LogoImg />
          <h2>Space Travellers Hub</h2>
        </div>
        <div className="nav-links">
          {Links.map((link) => (
            <li className={link.className} key={link.title}>
              <NavLink to={link.path}>{link.title}</NavLink>
            </li>
          ))}
        </div>
      </nav>

  
  );
};

export default NavBar;

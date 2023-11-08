import { NavLink } from 'react-router-dom';
import LogoImg from './Logo';
import '../styles/NavBar.css';

const NavBar = () => {
  const Links = [
    { path: '/', title: 'Rockets', className: 'navlink' },
    { path: '/mission', title: 'mission', className: 'navlink' },
    { path: '/dragons', title: 'Dragons', className: 'navlink' },
    { path: '/MyProfile', title: 'MyProfile', className: 'navlink' },
  ];
  return (
    <nav className='nav-container'>
      <div className="logo-section">
        <LogoImg />
        <h5>Space Travellers Hub</h5>
      </div>
      <div className="nav-links">
        {Links.map((link) => (
          <li className={link.className} key={link.title}>
            <NavLink to={link.path} exact activeClassName="active">{link.title}</NavLink>
          </li>
        ))}
      </div>
    </nav>

  );
};

export default NavBar;

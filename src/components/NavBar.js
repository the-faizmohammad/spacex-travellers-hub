import { NavLink } from 'react-router-dom';
import LogoImg from './Logo'; // Assuming you have a Logo component or image import
import '../styles/NavBar.css';

const NavBar = () => {
  const Links = [
    { path: '/', title: 'Rockets', className: 'noactive-link' },
    { path: '/mission', title: 'Missions', className: 'noactive-link' },
    { path: '/dragons', title: 'Dragons', className: 'noactive-link' },
    { path: '/MyProfile', title: 'My Profile', className: 'noactive-link' },
  ];

  return (
    <div className="nav">
      <div className="logo">
        <LogoImg className="img-logo" />
        <span className="text-logo">Space Travellers Hub</span>
      </div>
      <div className="nav-links">
        <ul className="link-list">
          {Links.map((link) => (
            <li className="nav-item" key={link.title}>
              <NavLink to={link.path} activeClassName="active-link" className={link.className}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

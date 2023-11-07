import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const Links = [
        { path: '/', title: 'Rockets', className: 'navlink' },
        { path: '/mission', title: 'mission', className: 'navlink' }
    ]
    return (
        <>
        <div>
            <div className="logo-section">
                <h2>Space Travellers Hub</h2>
            </div>
           <div className="nav-links">
             {Links.map((link) => (
               <li className={link.className} key={link.title}>
                 <NavLink to={link.path}>{link.title}</NavLink>
                </li>
             ))}
           </div>
        </div>
            
        </>
    )
}

export default NavBar;
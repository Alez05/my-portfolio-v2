import './nav.css';
import navLinks from '../../../data/navlinks.json';


const NavBar = () => {
  return (
    <nav className='navbar'>
      <a
        className='logo'
        href='/home'
      >
        Alex.dev
      </a>
      {navLinks.map((link, index) => (
        <a
          key={index}
          href={link.path}
          className={link.path === '/' ? 'active' : ''}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;

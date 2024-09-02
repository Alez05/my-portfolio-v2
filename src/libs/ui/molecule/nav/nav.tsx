import './nav.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <a
        className='active'
        href='/'
      >
        Home
      </a>
      <a href='/'>About</a>
      <a href='/'>Contact</a>
      <a href='/'>Blog</a>
    </nav>
  );
};

export default NavBar;

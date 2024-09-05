import './nav.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <a
        className='logo'
        href='/home'
      >
        Alex.dev
      </a>
      <a
        className='active'
        href='/'
      >
        Home
      </a>
      <a href='/about'>About</a>
      <a href='/contact'>Contact</a>
      <a href='/blog'>Blog</a>
    </nav>
  );
};

export default NavBar;

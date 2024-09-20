import './nav.css';
import navLinksData from '../../../../../content/navLinksData.json';
import { TNavProps } from './nav.type';
import ClientNav from './[client-nav]/clientnav';

const NavBar = ({ navLinks = [] }: TNavProps) => {
  return (
    <header className='navheader'>
      <div className='navdiv'>
        <span className='logo'>Alex.dev</span>
        <ClientNav navLinks={navLinks.length > 0 ? navLinks : navLinksData} />
      </div>
    </header>
  );
};

export default NavBar;

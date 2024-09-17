'use client';
import { useEffect, useState } from 'react';
import { TNavProps } from '../nav.type';

const ClientNav = ({ navLinks }: TNavProps) => {
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);
  return (
    <nav className='navbar'>
      {navLinks.map((link) =>
        link.path && link.name ? (
          <a
            key={link.path}
            href={link.path}
            className={currentPath === link.path ? 'active' : ''}
            aria-current={currentPath === link.path ? 'page' : undefined}
          >
            {link.name}
          </a>
        ) : null
      )}
    </nav>
  );
};

export default ClientNav;

import { NavBar } from '../../molecule';
import { TLayout } from './layout.type';

const Layout = ({ children }: TLayout) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

import React from 'react';
import { NavLinkData } from '../../constants/HomePage';
import { Link } from 'react-router-dom';
import MobileNav from './mobileNav';

type LayoutProps = {
  children: React.ReactElement; // Only a single React element allowed
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="flex items-center justify-between pt-7 pb-4 md:px-12 px-7">
        <Link to={'/'}>
          <span className="cursor-pointer font-semibold italic text-brown-600">
            __Belle__
          </span>
        </Link>
        <div className="flex items-center">
          <nav className="px-6">
            <div
              role="navigation menu"
              className="md:flex items-center nav-md hidden"
            >
              {NavLinkData.map((item, idx) => (
                <Link
                  key={idx}
                  className="text-grey-500 px-3 text-[17px] hover:text-grey-400 hover:underline"
                  to={item.url}
                >
                  {item.text}
                </Link>
              ))}
              {/* <SingleLevelDropdownMenu
                buttonLabel="Services"
                items={[
                  { title: 'Hair Styling', url: '/hair-styling' },
                  { title: 'Nails', url: '#' },
                  {
                    title: 'Lashes',
                    url: '#',
                  },
                ]}
              /> */}
            </div>
          </nav>
          <Link
            aria-label="See our recent work on clients"
            className="hidden md:block border rounded-xl active:border-pink-800 text-white px-8 py-3  hover:bg-pink-700 bg-pink-600 font-semibold transition-transform duration-300 active:scale-110"
            to={'#contact'}
          >
            See our Work!
          </Link>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

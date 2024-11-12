import { NavLinkData } from '../../constants/HomePage';
import MobileNav from './mobileNav';

const Header = () => {
  return (
    <div className="flex items-center justify-between pt-7 pb-4 md:px-12 px-7">
      <span className="cursor-pointer  font-semibold italic text-brown-600">
        __Belle__
      </span>
      <div className="flex items-center">
        <nav className="px-6">
          <div className="space-x-8 nav-md hidden md:block">
            {NavLinkData.map((item, idx) => (
              <a
                key={idx}
                className="text-grey-500 text-[17px] hover:text-grey-400 hover:underline"
                href={item.url}
              >
                {item.text}
              </a>
            ))}
          </div>
        </nav>
        <button className="hidden md:block border rounded-xl active:bg-pink-700 text-white px-8 py-3 hover:bg-[#bd2d58] bg-pink-600 font-semibold transition-transform duration-300 active:scale-110">
          See our Work!
        </button>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;

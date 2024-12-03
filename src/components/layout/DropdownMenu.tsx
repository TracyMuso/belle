import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
interface SingleLevelDropdownMenuProps {
  buttonLabel: string;
  items: {
    title: string;
    url: string;
    icon?: React.JSX.Element;
    action?: () => void;
  }[];
}
const SingleLevelDropdownMenu = ({
  buttonLabel,
  items,
}: SingleLevelDropdownMenuProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [open]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md text-gray-500 text-[17px] hover:text-gray-400 hover:underline border-none h-10 px-4 py-2"
        onClick={handleToggle}
      >
        {buttonLabel}
        <span className="ml-2">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-12">
          <ul
            role="menu"
            className="w-56 h-auto shadow-md rounded-md p-1 border bg-white"
          >
            {items.map((item, index) => (
              <li
                role="menu-item"
                key={index}
                className={`relative flex items-center cursor-pointer gap-2 px-4 py-2 text-sm hover:bg-pink-200 rounded-md`}
              >
                {item.icon && <span>{item.icon}</span>}
                <NavLink
                  to={item.url}
                  className="w-full text-left"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SingleLevelDropdownMenu;

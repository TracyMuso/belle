import React from 'react';

const HairStyling = () => {
  return (
    <div className="py-12 px-20 flex flex-col items-center gap-12 w-full">
      <h1 className="font-bold text-5xl">HairStyling Menu</h1>
      <div className="w-11/12 px-8 py-9 bg-pink-200 rounded-lg">
        <h3 className="text-brown-900 font-semibold text-3xl py-2">
          Hair Braiding
        </h3>
        <ul className="flex w-full flex-col gap-4 py-5">
          <li className="flex items-center gap-2">
            <span className="text-gray-800 whitespace-nowrap">
              Fulani Braids
            </span>
            <hr className="flex-grow h-[2px] bg-pink-800 border-none" />
            <span className="text-gray-800 whitespace-nowrap text-right">
              From k200
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="whitespace-nowrap">Knotless Braids</span>
            <hr className="flex-grow h-[2px] bg-pink-800 border-none" />
            <span className="whitespace-nowrap text-right">From k300</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="whitespace-nowrap">Box Braids</span>
            <hr className="flex-grow h-[2px] bg-pink-800 border-none" />
            <span className="whitespace-nowrap text-right">From k250</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HairStyling;

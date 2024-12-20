import React from 'react';
import type { DetailedServiceCardType } from '../../../types';

const DetailedServiceCard = ({ title, styles }: DetailedServiceCardType) => {
  return (
    <div className="w-full sm:px-8 px-5 py-9 bg-pink-200 rounded-lg">
      <h3 className="text-brown-900 font-semibold sm:text-2xl text-xl lg:text-3xl py-2">
        {title}
      </h3>
      <ul className="flex w-full flex-col gap-4 py-5">
        {styles.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-gray-800 text-sm sm:text-base  whitespace-nowrap">
              {item.name}
            </span>
            <hr className="flex-grow h-[2px] bg-pink-800 border-none" />
            <span className="text-gray-800 text-sm sm:text-base whitespace-nowrap text-right">
              From {item.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailedServiceCard;

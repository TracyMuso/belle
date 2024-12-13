import React from 'react';
import DetailedServiceCard from './components/cards/DetailedServiceCard';
import { ManicuresAndPedicuresData } from './constants/Nails';

const NailsMenu = () => {
  return (
    <div className="w-full p-0 m-0">
      <div className="py-12 flex flex-col items-center gap-12 w-full">
        <h1 className="font-bold sm:text-4xl text-3xl lg:text-5xl">
          HairStyling Menu
        </h1>
        <div className="sm:w-4/5 w-11/12 flex flex-col gap-12">
          {ManicuresAndPedicuresData.map((item, idx) => (
            <DetailedServiceCard {...item} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NailsMenu;

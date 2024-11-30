import React from 'react';
import DetailedServiceCard from './components/cards/DetailedServiceCard';
import { HairStylingData } from './constants/HairStyling';

const HairStyling = () => {
  return (
    <div className="py-12 flex flex-col items-center gap-12 w-full">
      <h1 className="font-bold text-5xl">HairStyling Menu</h1>
      <div className="w-4/5 flex flex-col gap-12">
        {HairStylingData.map((item, idx) => (
          <DetailedServiceCard {...item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default HairStyling;

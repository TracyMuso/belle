import type { TestimonialCardType } from '../../../types';

const TestimonialCard = ({ review, client }: TestimonialCardType) => {
  const CommasIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 46.195 46.195"
      width="24"
      height="24"
    >
      <path
        fill="#fff"
        d="M35.765,8.264c-5.898,0-10.555,4.782-10.555,10.68s4.844,10.68,10.742,10.68c0.059,0,0.148-0.008,0.207-0.009c-2.332,1.857-5.261,2.976-8.467,2.976c-1.475,0-2.662,1.196-2.662,2.67s0.949,2.67,2.424,2.67c10.469-0.001,18.741-8.518,18.741-18.987c0-0.002,0-0.004,0-0.007C46.195,13.042,41.661,8.264,35.765,8.264z"
      />
      <path
        fill="#fff"
        d="M10.75,8.264c-5.898,0-10.563,4.782-10.563,10.68s4.84,10.68,10.739,10.68c0.059,0,0.146-0.008,0.205-0.009c-2.332,1.857-5.262,2.976-8.468,2.976C1.188,32.591,0,33.787,0,35.261s0.964,2.67,2.439,2.67c10.469-0.001,18.756-8.518,18.756-18.987c0-0.002,0-0.004,0-0.007C21.195,13.042,16.646,8.264,10.75,8.264z"
      />
    </svg>
  );

  return (
    <div className="px-5 py-6 w-[300px] h-[230px] flex flex-col gap-4 items-center hover:bg-pink-500 bg-pink-400 shadow-md shadow-pink-600 max-md:shadow-none rounded-xl transform transition-transform duration-200 hover:scale-105">
      <div className="flex w-full justify-between">
        <span className="w-6 h-6 transform rotate-180">{CommasIcon}</span>
        <span className="w-6 h-6">{CommasIcon}</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-brown-800 italic text-center">{review}</p>
        <hr className="text-white w-10/12 h-1" />
        <span className="font-Cinzel">- {client} -</span>
      </div>
    </div>
  );
};

export default TestimonialCard;

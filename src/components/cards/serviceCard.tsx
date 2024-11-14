import { ServiceCardType } from '../../../types';

const ServiceCard = ({ img, title, text, url }: ServiceCardType) => {
  return (
    <div className="border-gray-500 shadow-md rounded-xl w-[300px] h-auto space-y-4 pb-3 bg-pink-50">
      <img
        src={img}
        alt="girl-in-pink-braids"
        className="rounded-t-xl w-[300px] h-[280px]"
      />
      <div className="flex flex-col px-2 gap-3 py-2">
        <h4 className="font-semibold">{title}</h4>
        <span className="text-gray-700">{text}</span>
        <a
          href={url}
          className="rounded-lg w-1/2 md:w-4/5 justify-center lg:w-1/2 bg-brown-400 hover:bg-brown-200 px-3 py-2 inline-flex items-center"
        >
          View more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;

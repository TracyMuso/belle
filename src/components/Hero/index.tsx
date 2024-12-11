const Hero = () => {
  return (
    <section className="flex items-center justify-between lg:px-20 sm:px-12 px-8 pt-16 pb-16">
      <div className="flex flex-col items-center md:items-start p-3 xl:w-3/5 md:w-[55%]">
        <h1 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-center md:text-left font-bold text-grey-600 font-Cinzel">
          Belle Beauty Parlor
        </h1>
        <h4 className="lg:text-2xl sm:text-xl py-2 font-semibold text-[#bd2d58]">
          Your Beauty, Our Passion
        </h4>
        <p className="text-grey-500 lg:text-xl text-center md:text-left lg:leading-8 lg:pt-8 pt-5 lg:pb-16 pb-8 xl:w-2/3">
          We provide the best beauty services and products in Lusaka. Come over
          and feel renewed, radiant, and ready to shine
        </p>
        <button className="md:w-2/3 w-full border rounded-xl active:bg-pink-700 active:border-pink-800 text-white px-8 py-3 hover:bg-pink-700 bg-pink-600 font-semibold transform transition-transform duration-200 hover:scale-110">
          Schedule an Appointment!
        </button>
      </div>
      <div className="w-2/5 hidden md:block">
        <img
          src="/assets/girl_in_braids.jpg"
          className="object-contain rounded-xl"
          alt="girl in braids"
        />
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[url(/header_img.png)] bg-center bg-cover bg-no-repeat rounded-2xl mt-4 md:mt-10 overflow-hidden">
      <div className="relative z-10 py-12 px-6 md:py-20 md:px-16 max-w-3xl ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Order your <br className="hidden md:block" /> favorite food here
        </h1>
        <p className="text-white text-sm md:text-base mb-6 md:mb-8">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with fresh ingredients and culinary expertise. Our mission is
          to satisfy your cravings and provide you with a memorable dining
          experience, one delicious meal at a time.
        </p>
        <button className="bg-white text-orange-600 hover:bg-orange-100 font-medium py-2 px-6 rounded-full transition duration-300 cursor-pointer">
          View Menu
        </button>
      </div>
    </section>
  );
};

export default Hero;

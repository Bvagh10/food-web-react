import React from "react";
import Aamras from './HeroImages/Aamras.png';
const Hero = () => {
  return (
    <div>
      <div className="container grid grid-cols-1
      md:grid-cols-2 gap-8 min-h-[600px]">
        {/* text section */}
        <div className="flex flex-col justify-center items-center gap-5 text-center md:text-left pt-24 md:pt-0 pb-10">
          <h1 className="text-3xl font-semibold">Tasty food is ready for you!</h1>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            repellendus animi placeat dicta impedit, et perferendis odit eos
            laboriosam aliquam.
          </p>
          <div className="flex gap-4 items-center md:justify-start justify-center">
            <button  className="primary-btn hover:scale-105 duration-200">Food Menu</button>
            <button className="secondry-btn hover:scale-105 duration-200">Book Table</button>
          </div>
        </div>
        {/* image section */}
        <div className="flex flex-col justify-center">
          <img
            src={Aamras}
            alt=""
            className="animate-spin-slow img-shadow w-[400px] mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const el = useRef(null);
  let typed = null;

  useEffect(() => {
    typed = new Typed(el.current, {
      strings: ["BTC", "BTB", "SASS"],
      startDelay: 300,
      typeSpeed: 120,
      backDelay: 100,
      backSpeed: 120,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    });

    // Cleanup function
    return () => {
      typed.destroy(); // Destroy the Typed instance when component unmounts
    };
  }, []);

  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full  h-screen mt-[-96px] mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Growing with data analytics
        </p>
        <h1 className=" md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible for{" "}
            <span ref={el} className="text-[#00df9a] pl-2"></span>
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;

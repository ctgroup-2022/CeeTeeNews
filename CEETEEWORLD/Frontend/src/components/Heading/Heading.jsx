import React from "react";
import './Heading.css'
const Heading = () => {
  return (
    <div className="img flex justify-center items-center text-[#FFCC2A] border-2 border-white py-4 h-64 w-full bg-cover bg-center">
      <div className="text-center">
        <span className="font-extrabold text-[10vw] md:text-[170px] tracking-normal">C</span>
        <span className="font-extrabold text-[6vw] md:text-[100px]">EE</span>
        <span className="font-extrabold text-[10vw] md:text-[170px] tracking-normal">T</span>
        <span className="font-extrabold text-[6vw] md:text-[100px]">EE</span>
        <span className="font-extrabold text-[10vw] md:text-[170px] tracking-normal">W</span>
        <span className="font-extrabold text-[6vw] md:text-[100px]">ORLD</span>
      </div>
    </div>
  );
};

export default Heading;

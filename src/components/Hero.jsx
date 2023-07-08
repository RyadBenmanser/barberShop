import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen  ">
      <div className="hero-content flex-col lg:flex-row w-9/12">
        <Image
          width={300}
          height={300}
          alt=""
          src="/images/about.png"
          className="max-w-sm rounded-lg shadow-2xl w-full"
        />
        <div>
          <h1 className="text-xl ">ABOUT OUR COMPANY</h1>
          <br />
          <h1 className="text-4xl font-semibold">
            52 YEARS OF EXPERIENCE IN HAIR CUT!
          </h1>
          <p className="py-6">
            Brook presents your services with flexible, convenient and cdpoe
            layouts. You can select your favorite layouts & elements for cular
            ts with unlimited ustomization possibilities. Pixel-perfreplication
            of the designers is intended.
          </p>
          <p>
            Brook presents your services with flexible, convefnient and ent
            anipurpose layouts. You can select your favorite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

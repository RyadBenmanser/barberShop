import React from "react";
import { TbMassage } from "react-icons/tb";
import { BiCut } from "react-icons/bi";
import { GiBeard } from "react-icons/gi";
import Image from "next/image";
import { TbMedicineSyrup } from "react-icons/tb";

const Service = () => {
  const serviceArray = [
    {
      icon: (
        <BiCut className="w-full h-full rounded-full hover:text-indigo-500" />
      ),
      title: "Stylish Hair Cut",
      description: `Every hair styling at 99 starts with an in-depth consultation to understand your individual style requirements. Our barbers will recommend the right cut and shave that best suits you.`,
    },
    {
      icon: (
        <TbMedicineSyrup className="w-full h-full rounded-full hover:text-indigo-500" />
      ),
      title: "SKIN",
      description: `The care your skin and your beard deserves. Exprience our carefully sourced organic skincare and grooming products. No gimmicks, no non-sense.`,
    },
    {
      icon: <GiBeard className="w-full h-full hover:text-indigo-500" />,
      title: "BARBER",
      description: `We offer an immersive beard service with hot towels, a trim or shave with a straight-edge razor, and a finish with our professional styling products`,
    },
  ];
  return (
    <div className=" w-full mx-auto">
      <div className="text-center">
        <span>
          <h1 className="text-2xl">PROFESSIONAL SERVICES</h1>
        </span>
        <span>
          <h2 className="text-3xl font-bold">
            OUR BEST SERVICES THAT WE OFFERING TO YOU
          </h2>
        </span>
      </div>
      <div className="flex flex-wrap justify-center mt-10 gap-3 w-full">
        {/* ----------- */}
        {serviceArray.map((x) => {
          return (
            <div key={x.description} className="p-4 max-w-sm">
              <div className="flex rounded-lg h-full bg-slate-200 p-8 flex-col">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-24 h-24 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 hover:bg-white text-white flex-shrink-0">
                    {x.icon}
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <h1 className="text-center text-2xl font-semibold">
                    {x.title}
                  </h1>
                  <p className="leading-relaxed text-base text-gray-900">
                    {x.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;

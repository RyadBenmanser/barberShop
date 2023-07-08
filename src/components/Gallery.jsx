import Image from "next/image";
import React from "react";

const Gallery = () => {
  const images = [
    {
      link: "https://themewagon.github.io/brber/assets/img/gallery/gallery1.png",
      classStyle: "lg:w-full  p-1 md:p-2  ",
    },
    {
      link: "	https://themewagon.github.io/brber/assets/img/gallery/gallery2.png",
      classStyle: "lg:w-full p-1 md:p-2",
    },
    {
      link: "https://themewagon.github.io/brber/assets/img/gallery/gallery3.png",
      classStyle: "lg:w-full  p-1 md:p-2",
    },
    {
      link: "	https://themewagon.github.io/brber/assets/img/gallery/gallery3.png",
      classStyle: "lg:w-full p-1 md:p-2",
    },
    {
      link: "https://themewagon.github.io/brber/assets/img/gallery/gallery4.png",
      classStyle: "lg:w-full  p-1 md:p-2",
    },
  ];
  const middelImages = images.length / 2;
  return (
    <div className="h-[75%] mx-auto sm:w-[75%] md:w-[65%] ">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          {images.slice(0, middelImages).map((x, index) => (
            <div key={index} className={x.classStyle}>
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center  ease-in-out duration-300  brightness-50	hover:brightness-100"
                src={x.link}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
        <div className="flex w-1/2 flex-wrap">
          {images.slice(3, images.length).map((x, index) => (
            <div key={index} className={x.classStyle}>
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center ease-in-out duration-300  brightness-50	hover:brightness-100"
                src={x.link}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

import Image from "next/image";
import React from "react";

const Teams = () => {
  const teamsTab = [
    {
      image: "/images/team1.png",
      name: "badr",
    },
    {
      image: "/images/team1.png",
      name: "ahraf",
    },
  ];

  return (
    <div className=" mx-auto w-full flex justify-center">
      <div className="carousel rounded-box  w-[75%] flex justify-center  ">
        {teamsTab.map((x, index) => {
          return (
            <div key={index} className="carousel-item group ">
              <div className="card mx-3 w-72 h-[450px] bg-base-100 shadow-xl ">
                <figure>
                  <Image
                    src="/images/team1.png"
                    width={300}
                    height={100}
                    alt="Shoes"
                    className="group-hover:scale-110 ease-in-out duration-300"
                  />
                </figure>
                <div className="absolute bottom-1 left-0 right-0 ">
                  <div className="flex justify-center ">
                    <div
                      className=" bg-fixed bg-center w-56 h-32  bg-no-repeat "
                      style={{
                        background: "url('/images/team_bg.png')",
                        backgroundSize: "100% 100%",
                      }}
                    >
                      <div className="flex justify-center items-center h-full text-white group-hover:text-orange-300">
                        <h1 className="text-3xl">{x.name}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;

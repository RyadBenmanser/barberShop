import React from "react";

const Pricing = () => {
  const pricingTab = [
    { name: "Regular Haircut", price: "$34+" },
    { name: "Haircut + Royal Shave", price: "$39+" },
    { name: "Beard Trim Machine", price: "$35" },
    { name: "Beard Trim Machine", price: "$35" },
  ];
  return (
    <div className="w-full">
      <div className="text-center ">
        <span className="text-xl font-semibold">OUR BEST PRICING</span>
        <br />
        <div className="w-96 mx-auto">
          <span className="text-4xl font-bold">
            WE PROVIDE BEST PRICE IN THE CITY!
          </span>
        </div>
      </div>

      <div className=" mx-auto">
        <div className="flex flex-wrap w-[95%] justify-items-center justify-center	 mx-auto">
          {pricingTab.map((x, index) => {
            return (
              <div
                key={index}
                className="  h-20 w-[500px] m-2 border-2 bg-slate-200 hover:bg-white "
              >
                <div className=" flex justify-between items-center h-full mx-10">
                  <span>{x.name}</span>
                  <span>{x.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

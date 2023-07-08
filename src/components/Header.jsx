"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  return (
    <div
      className=" bg-fixed bg-center bg-cover "
      style={{
        backgroundImage:
          "url('https://themewagon.github.io/brber/assets/img/hero/h1_hero.png')",
      }}
    >
      <section className=" flex items-center justify-center h-screen w-full m-auto mb-12 ">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-11">
            <div className="col-span-8 xl:col-span-8 lg:col-span-9 md:col-span-11 sm:col-span-10">
              <div className="">
                <span className="overflow-hidden text-xl text-orange-300 font-medium mb-26 block uppercase tracking-wider">
                  with patrick potter
                </span>
                <h1 className="overflow-hidden text-6xl font-bold mb-14 text-white leading-1.4 uppercase">
                  Our Hair Style make your look elegance
                </h1>
              </div>
            </div>
          </div>
      <Link
        href={"#"}
        className="w-[350px] h-20 rounded-full flex mr-auto bg-orange-300 opacity-50  hover:opacity-100"
      >
        <span className="text-center w-full my-auto flex items-center justify-center font-bold text-2xl">
          Prendre un rendez-vous <AiOutlineArrowRight className="mx-3" />
        </span>
      </Link>
        </div>
      </section>
    </div>
  );
};

export default Header;

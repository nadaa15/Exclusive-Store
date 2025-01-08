import React from 'react'
import playstation from '../assets/images/playstation5.png'
import woman from '../assets/images/woman.png'
import speakers from '../assets/images/speakers.png'
import perfume from '../assets/images/perfume.png'
import { Link } from 'react-router-dom'

export default function NewArrival() {
  return (
    <>
      <section className="mt-20">
        <div className="relative mb-6 before:absolute before:w-4 before:h-8 before:top-1/2 before:-translate-y-1/2 before:rounded-sm before:left-1 before:bg-main">
          <span className="text-main font-bold mb-8 ms-6">Featured</span>
        </div>
        <div className="mb-14">
          <div className="flex justify-start items-center gap-24 text-4xl font-semibold">
            <h2>New Arrival</h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-start items-center gap-8 w-full h-[750px] md:h-[1100px] lg:h-[550px]">
          <div className="relative bg-black p-8 w-full lg:w-1/2 h-full">
            <img src={playstation} alt="PlayStation 5" loading="lazy" />
            <div className="absolute left-0 bottom-0 text-white p-8 w-full lg:w-1/2">
              <h3 className="text-2xl font-semibold">PlayStation 5</h3>
              <p className="text-sm my-4">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="font-medium border-b ">
                <Link to={"/products"}>Shop Now</Link>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-full flex flex-col gap-8">
            <div className="flex gap-4 bg-[#0D0D0D] h-1/2 w-full">
              <div className=" flex flex-col justify-end items-start gap-4 p-4 w-1/2 h-full text-white">
                <h3 className="text-2xl font-semibold">Women’s Collections</h3>
                <p className="text-sm">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="font-medium border-b ">
                  <Link to={"/products"}>Shop Now</Link>
                </button>
              </div>
              <img src={woman} alt="" className="w-1/2 " loading="lazy" />
            </div>

            <div className="flex gap-8 w-full h-1/2">
              <div className="relative bg-black p-8 w-1/2 flex items-center justify-center">
                <img src={speakers} alt="PlayStation 5" loading="lazy" />
                <div className="absolute w-full h-full flex flex-col justify-end items-start text-white p-6 bg-[#D9D9D9] bg-opacity-10">
                  <h3 className="text-2xl font-semibold">Speakers</h3>
                  <p className="text-sm my-2">Amazon wireless speakers</p>
                  <button className="font-medium border-b ">
                    <Link to={"/products"}>Shop Now</Link>
                  </button>
                </div>
              </div>
              <div className="relative bg-black p-8 w-1/2 flex items-center justify-center">
                <img src={perfume} alt="PlayStation 5" loading="lazy" />
                <div className="absolute w-full h-full flex flex-col justify-end items-start text-white p-6 bg-[#D9D9D9] bg-opacity-10">
                  <h3 className="text-2xl font-semibold">Perfume</h3>
                  <p className="text-sm my-2">GUCCI INTENSE OUD EDP</p>
                  <button className="font-medium border-b ">
                    <Link to={"/products"}>Shop Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

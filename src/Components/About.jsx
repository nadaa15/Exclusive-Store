import React from 'react'
import about from '../assets/images/about.png'
import tom from '../assets/images/tom.png'
import emma from '../assets/images/emma.png'
import will from '../assets/images/will.png'
import Slider from 'react-slick';
import Path from './Path'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function About() {
  let location = useLocation();
  let path = location.pathname.slice(1);
  let pathname = path.charAt(0).toUpperCase() + path.slice(1);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>About Us - Exclusive</title>
        <meta name="description" content="Learn more about us." />
      </Helmet>
      <main className="container">
        <Path prev={"Home"} path={pathname} />

        <section className="flex flex-col lg:flex-row justify-center items-center gap-20">
          <div className="w-full lg:w-1/2">
            <img src={about} alt="Two women shopping" loading="lazy" />
          </div>
          <div className="w-full lg:w-1/2 lg:-order-1">
            <h2 className="text-5xl font-semibold mb-10">Our Story</h2>
            <p className="mb-6">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-36">
            <div className="group flex flex-col justify-center items-center gap-4 border rounded-md py-6 hover:bg-main hover:text-white transition-all">
              <div className="bg-slate-300 group-hover:bg-opacity-50 transition-all w-16 h-16 rounded-full flex justify-center items-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="50px"
                  width="50px"
                  className="text-white bg-black  p-2 rounded-full group-hover:text-black group-hover:bg-white transition-all"
                >
                  <path d="M22 5H2a1 1 0 00-1 1v4a3 3 0 002 2.82V22a1 1 0 001 1h16a1 1 0 001-1v-9.18A3 3 0 0023 10V6a1 1 0 00-1-1zm-7 2h2v3a1 1 0 01-2 0zm-4 0h2v3a1 1 0 01-2 0zM7 7h2v3a1 1 0 01-2 0zm-3 4a1 1 0 01-1-1V7h2v3a1 1 0 01-1 1zm10 10h-4v-2a2 2 0 014 0zm5 0h-3v-2a4 4 0 00-8 0v2H5v-8.18a3.17 3.17 0 001-.6 3 3 0 004 0 3 3 0 004 0 3 3 0 004 0 3.17 3.17 0 001 .6zm2-11a1 1 0 01-2 0V7h2zM4.3 3H20a1 1 0 000-2H4.3a1 1 0 000 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-3xl">10.5k </h3>
              <p className="text-sm">Sallers active our site</p>
            </div>
            <div className="group flex flex-col justify-center items-center gap-4 border rounded-md py-6 hover:bg-main hover:text-white transition-all">
              <div className="bg-slate-300 group-hover:bg-opacity-50 transition-all w-16 h-16 rounded-full flex justify-center items-center">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="50px"
                  width="50px"
                  className="text-white bg-black  p-2 rounded-full group-hover:text-black group-hover:bg-white transition-all"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z" />
                </svg>
              </div>
              <h3 className="font-bold text-3xl">33k</h3>
              <p className="text-sm">Mopnthly Produduct Sale</p>
            </div>
            <div className="group flex flex-col justify-center items-center gap-4 border rounded-md py-6 hover:bg-main hover:text-white transition-all">
              <div className="bg-slate-300 group-hover:bg-opacity-50 transition-all w-16 h-16 rounded-full flex justify-center items-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="50px"
                  width="50px"
                  className="text-white bg-black  p-2 rounded-full group-hover:text-black group-hover:bg-white transition-all"
                >
                  <path d="M18 7h-.35A3.45 3.45 0 0018 5.5a3.49 3.49 0 00-6-2.44A3.49 3.49 0 006 5.5 3.45 3.45 0 006.35 7H6a3 3 0 00-3 3v2a1 1 0 001 1h1v6a3 3 0 003 3h8a3 3 0 003-3v-6h1a1 1 0 001-1v-2a3 3 0 00-3-3zm-7 13H8a1 1 0 01-1-1v-6h4zm0-9H5v-1a1 1 0 011-1h5zm0-4H9.5A1.5 1.5 0 1111 5.5zm2-1.5A1.5 1.5 0 1114.5 7H13zM17 19a1 1 0 01-1 1h-3v-7h4zm2-8h-6V9h5a1 1 0 011 1z" />
                </svg>
              </div>
              <h3 className="font-bold text-3xl">45.5k</h3>
              <p className="text-sm">Customer active in our site</p>
            </div>
            <div className="group flex flex-col justify-center items-center gap-4 border rounded-md py-6 hover:bg-main hover:text-white transition-all">
              <div className="bg-slate-300 group-hover:bg-opacity-50 transition-all w-16 h-16 rounded-full flex justify-center items-center">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="50px"
                  width="50px"
                  className="text-white bg-black  p-2 rounded-full group-hover:text-black group-hover:bg-white transition-all"
                >
                  <path d="M320 96H192l-47.4-71.1c-7.1-10.7.5-24.9 13.3-24.9h196.2c12.8 0 20.4 14.2 13.3 24.9L320 96zm-128 32h128c3.8 2.5 8.1 5.3 13 8.4 56.7 36.3 179 114.5 179 279.6 0 53-43 96-96 96H96c-53 0-96-43-96-96 0-165.1 122.3-243.3 179-279.6 4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1-15 6.8-27.9 19.4-31.1 37.7-1.8 10.2-.8 20 3.4 29 4.2 8.8 10.7 15 17.3 19.5 11.6 7.9 26.9 12.5 38.6 16l2.2.7c13.9 4.2 23.4 7.4 29.3 11.7 2.5 1.8 3.4 3.2 3.8 4.1.3.8.9 2.6.2 6.7-.6 3.5-2.5 6.4-8 8.8-6.1 2.6-16 3.9-28.8 1.9-6-1-16.7-4.6-26.2-7.9-2.2-.8-4.3-1.5-6.3-2.1-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2.4 2.7.9 4.4 1.5 7.9 2.7 20.3 6.9 29.8 9.1v6.2c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6 15.7-6.7 28.4-19.7 31.6-38.7 1.8-10.4 1-20.3-3-29.4-3.9-9-10.2-15.6-16.9-20.5-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4-2.6-1.8-3.4-3-3.6-3.5-.2-.3-.7-1.6-.1-5 .3-1.9 1.9-5.2 8.2-8.1 6.4-2.9 16.4-4.5 28.6-2.6 4.3.7 17.9 3.3 21.7 4.3 10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z" />
                </svg>
              </div>
              <h3 className="font-bold text-3xl">25k</h3>
              <p className="text-sm">Anual gross sale in our site</p>
            </div>
          </div>
        </section>
        <section>
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="pt-6 px-4 pb-0 bg-slate-300 flex justify-center items-center">
                    <img src={tom} alt="Tom Cruise image" loading="lazy" />
                  </div>

                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                      Tom Cruise
                    </h5>
                    <p className="mb-3 font-normal text-black dark:text-gray-400">
                      Founder & Chairman
                    </p>
                    <ul className="flex items-center gap-4">
                      <li>
                        <svg
                          fill="none"
                          viewBox="0 0 15 15"
                          height="1em"
                          width="1em"
                        >
                          <path
                            fill="currentColor"
                            d="M14.478 1.5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.498 2.959a.5.5 0 10-1 0h1zm-6.49.082h-.5.5zm0 .959h.5-.5zm-6.99 7V12a.5.5 0 00-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 00-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 00-.195-.827l-.159.474zm7.224-8.027l-.37.336.18.199.265-.04-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 00-3.537 3.541h1A2.539 2.539 0 0110.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0010.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 002.06-1.134l-.744-.668a2.514 2.514 0 01-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 015.5 5.5V21h-2v-7.5a3.5 3.5 0 00-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-1 2h2V21H4V8.5z" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-4 pb-0 bg-slate-300 flex justify-center items-center">
                    <img src={emma} alt="Emma Watson image" loading="lazy" />
                  </div>

                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                      Emma Watson
                    </h5>
                    <p className="mb-3 font-normal text-black dark:text-gray-400">
                      Managing Director
                    </p>
                    <ul className="flex items-center gap-4">
                      <li>
                        <svg
                          fill="none"
                          viewBox="0 0 15 15"
                          height="1em"
                          width="1em"
                        >
                          <path
                            fill="currentColor"
                            d="M14.478 1.5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.498 2.959a.5.5 0 10-1 0h1zm-6.49.082h-.5.5zm0 .959h.5-.5zm-6.99 7V12a.5.5 0 00-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 00-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 00-.195-.827l-.159.474zm7.224-8.027l-.37.336.18.199.265-.04-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 00-3.537 3.541h1A2.539 2.539 0 0110.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0010.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 002.06-1.134l-.744-.668a2.514 2.514 0 01-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 015.5 5.5V21h-2v-7.5a3.5 3.5 0 00-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-1 2h2V21H4V8.5z" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-4 pb-0 bg-slate-300 flex justify-center items-center">
                    <img src={will} alt="Will Smith image" loading="lazy" />
                  </div>

                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                      Will Smith
                    </h5>
                    <p className="mb-3 font-normal text-black dark:text-gray-400">
                      Founder & Chairman
                    </p>
                    <ul className="flex items-center gap-4">
                      <li>
                        <svg
                          fill="none"
                          viewBox="0 0 15 15"
                          height="1em"
                          width="1em"
                        >
                          <path
                            fill="currentColor"
                            d="M14.478 1.5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.498 2.959a.5.5 0 10-1 0h1zm-6.49.082h-.5.5zm0 .959h.5-.5zm-6.99 7V12a.5.5 0 00-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 00-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 00-.195-.827l-.159.474zm7.224-8.027l-.37.336.18.199.265-.04-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 00-3.537 3.541h1A2.539 2.539 0 0110.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0010.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 002.06-1.134l-.744-.668a2.514 2.514 0 01-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 015.5 5.5V21h-2v-7.5a3.5 3.5 0 00-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-1 2h2V21H4V8.5z" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-36">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="bg-slate-300 w-16 h-16 rounded-full flex justify-center items-center">
                {" "}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  height="50px"
                  width="50px"
                  className="text-white bg-black  p-2 rounded-full"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 17 A2 2 0 0 1 7 19 A2 2 0 0 1 5 17 A2 2 0 0 1 9 17 z" />
                  <path d="M19 17 A2 2 0 0 1 17 19 A2 2 0 0 1 15 17 A2 2 0 0 1 19 17 z" />
                  <path d="M5 17H3v-4M2 5h11v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5M3 9h4" />
                </svg>{" "}
              </div>
              <h3 className="font-semibold text-xl">FREE AND FAST DELIVERY</h3>
              <p className="text-sm">Free delivery for all orders over $140</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="bg-slate-300 w-16 h-16 rounded-full flex justify-center items-center">
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="50px"
                  width="50px"
                  className="text-white bg-black  p-2 rounded-full"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M22 17.002a6.002 6.002 0 01-4.713 5.86l-.638-1.914A4.003 4.003 0 0019.465 19H17a2 2 0 01-2-2v-4a2 2 0 012-2h2.938a8.001 8.001 0 00-15.876 0H7a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5.002zM20 17v-4h-3v4h3zM4 13v4h3v-4H4z" />
                </svg>{" "}
              </div>
              <h3 className="font-semibold text-xl">24/7 CUSTOMER SERVICE</h3>
              <p className="text-sm">Friendly 24/7 customer support</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="bg-slate-300 w-16 h-16 rounded-full flex justify-center items-center">
                {" "}
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="50px"
                  width="50px"
                  className="text-white bg-black  p-2 rounded-full"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={30}
                    d="M336 176L225.2 304 176 255.8"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={30}
                    d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z"
                  />
                </svg>{" "}
              </div>
              <h3 className="font-semibold text-xl">MONEY BACK GUARANTEE</h3>
              <p className="text-sm">We reurn money within 30 days</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

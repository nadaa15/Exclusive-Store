import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";



export default function CategorySlider() {
  const [categories, setCategories] = useState([
    {
      slug: "smartphones",
      name: "Smartphones",
      img: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBox="0 0 24 24"
          height="56px"
          width="56px"
          className="group-hover:text-white mx-auto"
        >
          <path d="M7 2 H17 A2 2 0 0 1 19 4 V20 A2 2 0 0 1 17 22 H7 A2 2 0 0 1 5 20 V4 A2 2 0 0 1 7 2 z" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
    {
      slug: "laptops",
      name: "Laptops",
      img: (
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="56px"
          width="56px"
          className="group-hover:text-white mx-auto"
        >
          <path d="M956.9 845.1L896.4 632V168c0-17.7-14.3-32-32-32h-704c-17.7 0-32 14.3-32 32v464L67.9 845.1C60.4 866 75.8 888 98 888h828.8c22.2 0 37.6-22 30.1-42.9zM200.4 208h624v395h-624V208zm228.3 608l8.1-37h150.3l8.1 37H428.7zm224 0l-19.1-86.7c-.8-3.7-4.1-6.3-7.8-6.3H398.2c-3.8 0-7 2.6-7.8 6.3L371.3 816H151l42.3-149h638.2l42.3 149H652.7z" />
        </svg>
      ),
    },
    {
      slug: "mens-watches",
      name: "Mens Watches",
      img: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBox="0 0 24 24"
          height="56px"
          width="56px"
          className="group-hover:text-white mx-auto"
        >
          <path d="M9 5a.5.5 0 00-1 0v3H6a.5.5 0 000 1h2.5a.5.5 0 00.5-.5V5z" />
          <path d="M4 1.667v.383A2.5 2.5 0 002 4.5v7a2.5 2.5 0 002 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 002-2.45V8h.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5H14v-.5a2.5 2.5 0 00-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667zM4.5 3h7A1.5 1.5 0 0113 4.5v7a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 013 11.5v-7A1.5 1.5 0 014.5 3z" />
        </svg>
      ),
    },
    {
      slug: "tablets",
      name: "Tablets",
      img: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBox="0 0 24 24"
          height="56px"
          width="56px"
          className="group-hover:text-white mx-auto"
        >
          <path d="M6 2 H18 A2 2 0 0 1 20 4 V20 A2 2 0 0 1 18 22 H6 A2 2 0 0 1 4 20 V4 A2 2 0 0 1 6 2 z" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
    {
      slug: "mobile-accessories",
      name: "Mobile Accessories",
      img: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBox="0 0 24 24"
          height="56px"
          width="56px"
          className="group-hover:text-white mx-auto"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M6 13 H7 A2 2 0 0 1 9 15 V18 A2 2 0 0 1 7 20 H6 A2 2 0 0 1 4 18 V15 A2 2 0 0 1 6 13 z" />
          <path d="M17 13 H18 A2 2 0 0 1 20 15 V18 A2 2 0 0 1 18 20 H17 A2 2 0 0 1 15 18 V15 A2 2 0 0 1 17 13 z" />
          <path d="M4 15v-3a8 8 0 0116 0v3" />
        </svg>
      ),
    },
    {
      slug: "sunglasses",
      name: "Sunglasses",
      img: (
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          height="56px"
          width="56px"
          className="group-hover:text-white mx-auto"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={30}
            d="M224 232a32 32 0 0164 0M448 200h16M64 200H48M64 200c0 96 16 128 80 128s80-32 80-128c0 0-16-16-80-16s-80 16-80 16zM448 200c0 96-16 128-80 128s-80-32-80-128c0 0 16-16 80-16s80 16 80 16z"
          />
        </svg>
      ),
    },
  ]);
  
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        style={{
          display: "block",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          color: "black",
          cursor: "pointer",
        }}
        className="bg-[#F5F5F5] absolute right-[2%] -top-[35%] lg:-top-[20%] xl:-top-[40%]"
        onClick={onClick}
      >
        <i className="fa-solid fa-arrow-right-long"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        style={{
          display: "block",
          background: "#F5F5F5",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          color: "black",
          cursor: "pointer",
        }}
        className="absolute -top-[35%] left-[70%] lg:left-[90%] lg:-top-[20%] xl:-top-[40%]"
        onClick={onClick}
      >
        <i className="fa-solid fa-arrow-left-long"></i>
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    rows: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <section className="my-16 border-y border-gray-200 py-20">
      <div className="relative mb-6 before:absolute before:w-4 before:h-8 before:top-1/2 before:-translate-y-1/2 before:rounded-sm before:left-1 before:bg-main">
        <span className="text-main font-bold mb-8 ms-6">Categories's</span>
      </div>
      <div className="flex justify-start items-center gap-24 text-4xl font-semibold">
        <h2>Browse By Category</h2>
      </div>
      <div className="mt-20 lg:mt-8">
        <Slider {...settings}>
          {categories?.map((category,index) => (
            <Link key={index} to={`/categoryproducts/${category.slug}`}>
              <div className="slide-container py-6 px-4 border border-black flex flex-col justify-center items-center hover:bg-main hover:text-white transition-all hover:shadow-md hover:border-none rounded-md">
                {category.img}
                <h2 className="pt-4 font-semibold text-center">
                  {category?.name}
                </h2>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
}

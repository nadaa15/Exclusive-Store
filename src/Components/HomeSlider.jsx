import React from "react";
import Slider from "react-slick";
import hero from "../assets/images/hero.png";
import appleLogo from "../assets/images/apple-logo.png";
import { Link } from "react-router-dom";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="flex justify-center items-center gap-4 w-full px-8 py-16 bg-black ">
          <div className="hero-content flex flex-col justify-center items-start gap-3 px-0 md:px-6 text-white w-1/2">
            <div className="flex justify-center gap-4 items-center">
              <img
                src={appleLogo}
                alt="Apple Logo"
                className="w-6"
                loading="lazy"
              />
              <span>iPhone 14 series</span>
            </div>
            <h3 className="font-semibold text-lg md:text-5xl">
              Up to 10% off Voucher
            </h3>
            <Link className="flex gap-2 hover:gap-3 transition-all justify-center items-center">
              <p className="border-b-2">Shop Now</p>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <img
            src={hero}
            className="w-1/2 "
            alt="iPhone 14 image"
            loading="lazy"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center gap-4 w-full px-8 py-16 bg-black ">
          <div className="hero-content flex flex-col justify-center items-start gap-3 px-0 md:px-6 text-white w-1/2">
            <div className="flex justify-center gap-4 items-center">
              <img
                src={appleLogo}
                alt="Apple Logo"
                className="w-6"
                loading="lazy"
              />
              <span>iPhone 14 series</span>
            </div>
            <h3 className="font-semibold text-lg md:text-5xl">
              Up to 10% off Voucher
            </h3>
            <Link className="flex gap-2 hover:gap-3 transition-all justify-center items-center">
              <p className="border-b-2">Shop Now</p>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <img
            src={hero}
            className="w-1/2 "
            alt="iPhone 14 image"
            loading="lazy"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center gap-4 w-full px-8 py-16 bg-black ">
          <div className="hero-content flex flex-col justify-center items-start gap-3 px-0 md:px-6 text-white w-1/2">
            <div className="flex justify-center gap-4 items-center">
              <img
                src={appleLogo}
                alt="Apple Logo"
                className="w-6"
                loading="lazy"
              />
              <span>iPhone 14 series</span>
            </div>
            <h3 className="font-semibold text-lg md:text-5xl">
              Up to 10% off Voucher
            </h3>
            <Link className="flex gap-2 hover:gap-3 transition-all justify-center items-center">
              <p className="border-b-2">Shop Now</p>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <img src={hero} className="w-1/2 " alt="iPhone 14 image" loading='lazy'/>
        </div>
      </div>
    </Slider>
  );
}
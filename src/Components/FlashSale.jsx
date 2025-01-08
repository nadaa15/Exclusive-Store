import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductsSlice";
import Loading from "./Loading";
import { Link } from "react-router-dom";

export default function FlashSale() {
   const dispatch = useDispatch();
   const { products, loading } = useSelector((state) => state.products);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });



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
      className="bg-[#F5F5F5] absolute right-[2%] -top-[10%] lg:-top-[20%]"
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
      className="absolute -top-[10%] left-[70%] lg:left-[90%] lg:-top-[20%]"
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
    rows:1,
    slidesToShow: 4, 
      slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 960, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const countdownDate = new Date("Jan 17 2025 11:59:59").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const dateDifference = countdownDate - now;

      const days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (dateDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);
   useEffect(() => {
     dispatch(getProducts());
   }, [dispatch]);

   if (loading) return <Loading />;
  

  return (
    <section>
      {/* Header */}
      <div className="relative mb-6 before:absolute before:w-4 before:h-8 before:top-1/2 before:-translate-y-1/2 before:rounded-sm before:left-1 before:bg-main">
        <span className="text-main font-bold mb-8 ms-6">Today's</span>
      </div>
      <div className="relative">
        <div className="flex flex-col lg:flex-row justify-start items-start gap-2 lg:gap-24 text-4xl font-semibold">
          <h2>Flash Sales</h2>
          <div className="flex items-center gap-0 md:gap-4 mb-6">
            <div>
              <span className="text-xs">Days</span>
              <span className="block text-4xl font-bold">{timeLeft.days}</span>
            </div>
            <span className="text-main mx-4">:</span>
            <div>
              <span className="text-xs">Hours</span>
              <span className="block text-4xl font-bold">{timeLeft.hours}</span>
            </div>
            <span className="text-main mx-4">:</span>
            <div>
              <span className="text-xs">Minutes</span>
              <span className="block text-4xl font-bold">
                {timeLeft.minutes}
              </span>
            </div>
            <span className="text-main mx-4">:</span>
            <div>
              <span className="text-xs">Seconds</span>
              <span className="block text-4xl font-bold">
                {timeLeft.seconds}
              </span>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-8">
          <Slider {...settings}>
            {products
              .filter((product) => product.discountPercentage > "18")
              .map((product) => (
                <div key={product.id}>
                  <ProductCard
                    id={product.id}
                    category={product.category}
                    img={product.thumbnail}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    discount={product.discountPercentage}
                  />
                </div>
              ))}
          </Slider>
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center">
        <button className="mt-6 mx-auto bg-main text-white py-2 px-8 rounded-md shadow hover:bg-opacity-90">
          <Link to={"/products"}>View All Products</Link>
        </button>
      </div>
    </section>
  );
}

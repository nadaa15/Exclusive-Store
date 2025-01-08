import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductsSlice";
import Loading from "./Loading";
import { Link } from "react-router-dom";


export default function BestSelling() {

  const dispatch = useDispatch();
  const {products, loading} = useSelector((state)=>state.products)


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
    swipeToSlide: true,
  rows: 1,
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
  
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  if (loading) return <Loading/>
  
  return (
    <section>
      {/* Header */}
      <div className="relative mb-6 before:absolute before:w-4 before:h-8 before:top-1/2 before:-translate-y-1/2 before:rounded-sm before:left-1 before:bg-main">
        <span className="text-main font-bold mb-8 ms-6">This Month</span>
      </div>
      <div className="flex justify-between items-center mb-14">
        <h2 className="text-4xl font-semibold">Best Selling Products</h2>
        <div className="flex justify-center">
          <button className="bg-main text-white px-8 py-2 rounded-md shadow hover:bg-opacity-90">
            <Link to={"/products"}>View All</Link>
          </button>
        </div>
      </div>
      <div>
        <Slider {...settings}>
          {products
            .filter((product) => product.rating > "4")
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
    </section>
  );
}

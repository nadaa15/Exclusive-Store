import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductsSlice";
import Loading from "./Loading";
import { Link } from "react-router-dom";

export default function OurProducts() {

  
  const dispatch = useDispatch();
  const {products, loading} = useSelector((state)=>state.products)

  function SampleNextArrow(props) {
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
        className="absolute -top-[20%] right-[2%]  xl:-top-[5%]"
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
        className="absolute -top-[20%] left-[70%] lg:left-[90%] xl:-top-[5%]"
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
    rows: 2,
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
    dispatch(getProducts())
  
  }, [dispatch]);
  
  
  

    if (loading) return <Loading/>;

  return (
    <section>
      {/* Header */}
      <div className="relative mb-6 before:absolute before:w-4 before:h-8 before:top-1/2 before:-translate-y-1/2 before:rounded-sm before:left-1 before:bg-main">
        <span className="text-main font-bold mb-8 ms-6">Our Products</span>
      </div>
      <div className="relative">
        <div className="flex justify-start items-center gap-24 text-4xl font-semibold">
          <h2>Explore Our Products</h2>
        </div>

        {/* Slider */}
        <div className="mt-8">
          <Slider {...settings}>
            {products.map((product) => (
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

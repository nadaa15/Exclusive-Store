import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import RelatedCatSlider from "./RelatedCatSlider";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../Redux/WishlistSlice";
import { addToCart } from "../Redux/CartSlice";
import { Helmet } from "react-helmet";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const [displayedQuantity, setdisplayedQuantity] = useState(1);
  const { cart, loading, error } = useSelector((state) => state.cart);
  const finalPrice = Math.floor(
    productDetails.price -
      (productDetails.price * productDetails.discountPercentage) / 100
  );
  const price = productDetails.price * displayedQuantity;
  const dispatch = useDispatch();
  const { id, category } = useParams();

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "ms-32",
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "30%",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            flexDirection: "column",
            gap: "100px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "100px",
        }}
      >
        {productDetails.images?.[i] ? (
          <img
            style={{
              width: "100%",
              backgroundColor: "#F5F5F5",
            }}
            src={productDetails.images[i]}
            alt={productDetails.title}
            loading="lazy"
          />
        ) : null}
      </div>
    ),
  };

  const handleAddToCart = () => {
    const product = {
      id: productDetails.id,
      title: productDetails.title,
      price: productDetails.price,
      img: productDetails.thumbnail,
      discount: productDetails.discountPercentage,
      finalPrice,
      quantity: displayedQuantity,
    };
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = () => {
    const product = {
      id: productDetails.id,
      title: productDetails.title,
      price,
      img: productDetails.thumbnail,
      discount: productDetails.discountPercentage,
      finalPrice,
      quantity: displayedQuantity,
    };
    dispatch(addToWishlist(product));
  };

  const handleIncrease = () => {
    setdisplayedQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setdisplayedQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  function getProductDetails(productId) {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then(({ data }) => {
        setProductDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <main className="container">
      <Helmet>
        <title>{`${productDetails.title} - Exclusive`}</title>
        <meta name="description" content={productDetails.description} />
      </Helmet>
      <section>
        <div className="md:flex justify-center items-center gap-32">
          {/* Product Image Slider */}
          <div className="card-img mb-4 w-full md:w-1/2 md:mb-0">
            <div className="slider-container relative">
              {productDetails.images?.length > 1 ? (
                <Slider {...settings}>
                  {productDetails.images.map((src, index) => (
                    <img
                      key={index}
                      className="w-full object-cover bg-[#F5F5F5]"
                      src={src}
                      alt={productDetails.title}
                      loading="lazy"
                    />
                  ))}
                </Slider>
              ) : (
                <img
                  className="w-full object-cover bg-[#F5F5F5]"
                  src={productDetails.images?.[0]}
                    alt={productDetails.title}
                    loading="lazy"
                />
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2">
            <div className="border-b-2">
              <h1 className="text-slate-900 font-bold">
                {productDetails.title}
              </h1>
              <ul className="flex justify-start items-center gap-1 my-2">
                <li>
                  <i className="fas fa-star text-yellow-400"></i>
                </li>
                <li>
                  <i className="fas fa-star text-yellow-400"></i>
                </li>
                <li>
                  <i className="fas fa-star text-yellow-400"></i>
                </li>
                <li>
                  <i className="fas fa-star text-yellow-400"></i>
                </li>
                <li>
                  <i className="fas fa-star text-gray-300"></i>
                </li>
                <li className="flex items-center gap-4">
                  <p className="ms-2 text-gray-400">
                    ({productDetails.rating})
                  </p>
                  |
                  <span className="text-secondary">
                    {productDetails.availabilityStatus}
                  </span>
                </li>
              </ul>
              <p className="text-2xl">${productDetails.price}</p>
              <p className="font-light my-4">{productDetails.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="my-4 flex justify-start items-center gap-8">
              <div className="flex justify-center items-center">
                <i
                  onClick={handleDecrease}
                  className="fa-solid fa-minus border border-gray-400 hover:border-0 hover:bg-main hover:text-white cursor-pointer rounded-s-md px-4 py-3"
                ></i>
                <p className="px-8 py-2 border border-gray-400">
                  {displayedQuantity}
                </p>
                <i
                  onClick={handleIncrease}
                  className="fa-solid fa-plus border border-gray-400 hover:border-0 hover:bg-main hover:text-white cursor-pointer rounded-r-md px-4 py-3"
                ></i>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-main text-white py-2 px-12 rounded-md shadow hover:bg-opacity-90"
              >
                Buy Now
              </button>
              <button
                onClick={handleAddToWishlist}
                className="border p-2 border-gray-400 rounded-md"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="20px"
                  width="20px"
                >
                  <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
                </svg>
              </button>
            </div>

            <div className="mt-10">
              <div className="flex justify-start items-center gap-8 border border-gray-400 rounded-t-md p-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="50px"
                  width="50px"
                >
                  <path d="M.75 7.5h9.75l.75 1.5H1.5L.75 7.5m1 3h9.75l.75 1.5H2.5l-.75-1.5m16.25 8c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5m1.5-9H17V12h4.46L19.5 9.5M8 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3h-4c0 1.66-1.35 3-3 3-1.66 0-3-1.34-3-3H3v-3.5h2V15h.76c.55-.61 1.35-1 2.24-1 .89 0 1.69.39 2.24 1H15V6H3c0-1.11.89-2 2-2h12v4h3z" />
                </svg>
                <div>
                  <h4 className="font-medium mb-2">Free Delivery</h4>
                  <p className="font-medium text-xs underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-8 border border-gray-400 rounded-b-md p-4">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="50px"
                  width="50px"
                >
                  <path d="M11.534 7h3.932a.25.25 0 01.192.41l-1.966 2.36a.25.25 0 01-.384 0l-1.966-2.36a.25.25 0 01.192-.41zm-11 2h3.932a.25.25 0 00.192-.41L2.692 6.23a.25.25 0 00-.384 0L.342 8.59A.25.25 0 00.534 9z" />
                  <path
                    fillRule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 11-.771-.636A6.002 6.002 0 0113.917 7H12.9A5.002 5.002 0 008 3zM3.1 9a5.002 5.002 0 008.757 2.182.5.5 0 11.771.636A6.002 6.002 0 012.083 9H3.1z"
                  />
                </svg>
                <div>
                  <h4 className="font-medium mb-2">Return Delivery</h4>
                  <p className="font-medium text-xs">
                    {productDetails?.returnPolicy}.{" "}
                    <span className="underline">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedCatSlider category={category} />
    </main>
  );
}

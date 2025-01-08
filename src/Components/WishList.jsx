import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductsSlice";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { removeAllWishlist, removeFromWishlist } from "../Redux/WishlistSlice";
import { addToCart } from "../Redux/CartSlice";
import Slider from "react-slick";
import Loading from "./Loading";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

export default function WishList() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const { wishlist } = useSelector((state) => state.wishlist);


  const handleRemove = (product) => {
    dispatch(removeFromWishlist({ id: product.id }));
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    handleRemove(product);
  };
  const moveAllToCart = () => {
    wishlist.forEach((product) => {
      dispatch(addToCart(product));
    });
    dispatch(removeAllWishlist());
    toast.success("All items moved to cart");
  };

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
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) return <Loading />;

  return (
    <main className="container">
      <Helmet>
        <title>Your Wishlist - Exclusive</title>
        <meta
          name="description"
          content="Save your favorite products in your wishlist for later. Easily add them to your cart or share with friends."
        />
      </Helmet>
      {wishlist.length === 0 ? (
        <>
          <header className="flex justify-between items-center">
            <h2 className="text-xl">Wishlist ({wishlist.length})</h2>
            <button
              onClick={() => moveAllToCart()}
              className="text-black font-medium border border-black rounded-md px-8 py-2"
            >
              Move All To Bag
            </button>
          </header>
          <div className="bg-gray-200 p-12 container flex flex-col justify-center items-center rounded">
            <h3 className="text-lg font-bold mb-6">There are no items yet</h3>
          </div>
        </>
      ) : (
        <>
          <header className="flex justify-between items-center">
            <h2 className="text-xl">Wishlist ({wishlist.length})</h2>
            <button
              onClick={() => moveAllToCart()}
              className="text-black font-medium border border-black rounded-md px-8 py-2"
            >
              Move All To Bag
            </button>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 my-20">
            {wishlist.map((product) => (
              <div className="card p-4 cursor-pointer">
                <div className="card-img relative group bg-gray-200 p-10">
                  <img
                    className="w-full object-cover hover:scale-110 transition-all"
                    src={product.img}
                    alt={product.title}
                    loading="lazy"
                  />
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex justify-center items-center gap-4 absolute w-full -bottom-14 left-0 bg-black text-white py-2 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="25px"
                      width="25px"
                    >
                      <path d="M21 4H2v2h2.3l3.28 9a3 3 0 002.82 2H19v-2h-8.6a1 1 0 01-.94-.66L9 13h9.28a2 2 0 001.92-1.45L22 5.27A1 1 0 0021.27 4 .84.84 0 0021 4zm-2.75 7h-10L6.43 6h13.24z" />
                      <path d="M12 19.5 A1.5 1.5 0 0 1 10.5 21 A1.5 1.5 0 0 1 9 19.5 A1.5 1.5 0 0 1 12 19.5 z" />
                      <path d="M18 19.5 A1.5 1.5 0 0 1 16.5 21 A1.5 1.5 0 0 1 15 19.5 A1.5 1.5 0 0 1 18 19.5 z" />
                    </svg>
                    <span>Add To Cart</span>
                  </button>

                  <span className="absolute top-0 left-0 bg-main text-white px-2 py-1 text-xs rounded-sm m-2">
                    -{product.discount}
                  </span>
                  <div className="flex flex-col justify-center items-center gap-6 absolute top-0 right-0 m-2">
                    <i
                      onClick={() => handleRemove(product)}
                      className="fa-regular fa-trash-can bg-white p-2 hover:bg-main hover:text-white transition-all duration-300 rounded-full cursor-pointer"
                    ></i>
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold line-clamp-1 my-2">
                    {product.title}
                  </h2>
                  <div className="flex flex-wrap justify-start items-center gap-4">
                    <p className="text-main font-bold text-md">
                      {Math.floor(
                        product.price - (product.price * product.discount) / 100
                      )}
                      $
                    </p>
                    <p className="text-gray-400 line-through font-bold text-md">
                      {product.price}$
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <section>
        <div className="relative flex justify-between items-center mb-6 before:absolute before:w-4 before:h-8 before:top-1/2 before:-translate-y-1/2 before:rounded-sm before:left-1 before:bg-main">
          <span className="text-black text-xl ms-8">Just For You</span>
          <div className="flex justify-center">
            <button className="text-black font-medium border border-black rounded-md px-8 py-2">
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
    </main>
  );
}

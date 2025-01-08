import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../Redux/CartSlice";
import { addToWishlist } from "../Redux/WishlistSlice";

export default function ProductCard({
  id,
  category,
  img,
  title,
  price,
  rating,
  discount,
}) {
  const dispatch = useDispatch();
const { wishlist } = useSelector((state) => state.wishlist);
const isAddedToWishlist = wishlist.some((item) => item.id === id);
  const finalPrice = Math.floor(price - (price * discount) / 100);

  const handleAddToCart = () => {
    const product = { id, title, price, img, discount, finalPrice };
    dispatch(addToCart(product));
  };
  const handleAddToWishlist = () => {
    const product = { id, title, price, img, discount, finalPrice };
    dispatch(addToWishlist(product));
  };

  return (
    <>
      <div className="card p-4 cursor-pointer">
        <div className="card-img relative group bg-gray-200 p-10">
          <img
            className="w-full object-cover hover:scale-110 transition-all"
            src={img}
            alt={title}
            loading="lazy"
          />
          <button
            onClick={handleAddToCart}
            className=" absolute w-full -bottom-14 left-0 bg-black text-white py-2 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300"
          >
            Add to Cart
          </button>
          <span className="absolute top-0 left-0 bg-main text-white px-2 py-1 text-xs rounded-sm m-2">
            -{discount}
          </span>
          <div className="flex flex-col justify-center items-center gap-6 absolute top-0 right-0 m-2">
            <i
              onClick={handleAddToWishlist}
              className={`fa-solid fa-heart ${
                isAddedToWishlist
                  ? "bg-main text-white p-2 rounded-full cursor-pointer"
                  : "bg-white p-2 hover:bg-main hover:text-white transition-all duration-300 rounded-full cursor-pointer"
              } `}
            ></i>

            <Link to={`/productdetails/${id}/${category}`}>
              <i className="fa-regular fa-eye bg-white p-2 hover:bg-main hover:text-white transition-all duration-300 rounded-full cursor-pointer"></i>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="font-semibold line-clamp-1 my-2">{title}</h2>
          <div className="flex flex-wrap justify-start items-center gap-4">
            <p className="text-main font-bold text-md">{finalPrice}$</p>
            <p className="text-gray-400 line-through font-bold text-md">
              {price}$
            </p>
          </div>
          <ul className="flex justify-start items-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <li key={star}>
                <i
                  className={`fas fa-star ${
                    star <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                ></i>
              </li>
            ))}
            <li>
              <p className="ms-1">({rating})</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

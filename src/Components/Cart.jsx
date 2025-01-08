// cart component
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllCart,
  removeFromCart,
  updateQuantity,
} from "../Redux/CartSlice";
import { Link, useLocation } from "react-router-dom";
import Path from "./Path";
import { Helmet } from "react-helmet";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
 let location = useLocation();
 let path = location.pathname.slice(1);
 let pathname = path.charAt(0).toUpperCase() + path.slice(1);

  const handleIncrease = (product) => {
    dispatch(
      updateQuantity({ id: product.id, quantity: product.quantity + 1 })
    );
  };

  const handleDecrease = (product) => {
    if (product.quantity <= 1) {
      dispatch(removeFromCart({ id: product.id }));
    } else if (product.quantity > 1) {
      dispatch(
        updateQuantity({ id: product.id, quantity: product.quantity - 1 })
      );
    }
  };

  const handleRemove = (product) => {
    dispatch(removeFromCart({ id: product.id }));
  };

  const removeCart = () => {
    dispatch(removeAllCart());
    toast.success("All items removed from cart");
  };

  const cartTotal = cart.reduce(
    (total, product) => total + product.finalPrice * product.quantity,
    0
  );

  return (
    <main className="container">
      <Helmet>
        <title>Shopping Cart - Exclusive</title>
        <meta
          name="description"
          content="Review and manage items in your shopping cart. Proceed to checkout or continue shopping to add more items."
        />
      </Helmet>
      <Path prev={"Home"} path={pathname} />

      {cart.length === 0 ? (
        <>
          <div className="bg-gray-200 p-12 container flex flex-col justify-center items-center rounded">
            <h3 className="text-lg font-bold mb-6">There are no items yet</h3>
          </div>
        </>
      ) : (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
            <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr
                  className="relative bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={product.id}
                >
                  <th
                    scope="row"
                    className="flex justify-start items-center gap-4 px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-[50px]"
                      src={product.img}
                      alt={product.title}
                      loading="lazy"
                    />
                    <p>{product.title}</p>
                  </th>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-8 px-4 py-1 rounded-md border w-fit">
                      <span>{product.quantity}</span>
                      <div className="flex flex-col">
                        <button onClick={() => handleIncrease(product)}>
                          <i className="fa-solid fa-angle-up"></i>
                        </button>
                        <button onClick={() => handleDecrease(product)}>
                          <i className="fa-solid fa-angle-down"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    ${product.finalPrice * product.quantity}
                  </td>
                  <button
                    onClick={() => handleRemove(product)}
                    className="absolute bg-main w-5 h-5 top-4 left-7 text-white flex justify-center items-center text-xs rounded-full"
                  >
                    <i className="fa-solid fa-xmark transition-all duration-300 cursor-pointer"></i>
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex justify-between items-center mt-8 mb-14">
        <Link
          className="text-black font-medium border border-black rounded-md px-8 py-2"
          to={"/products"}
        >
          Back to Shop
        </Link>
        <button
          onClick={removeCart}
          className="text-black font-medium border border-black rounded-md px-8 py-2"
        >
          Update Cart
        </button>
      </div>
      <div className="flex flex-col gap-10 md:flex-row md:gap-36 items-start">
        <div className="flex items-center gap-4 w-full md:w-1/2 ">
          <input
            type="text"
            placeholder="Coupon Code"
            className="rounded-sm pe-8 py-2 w-1/2"
          />
          <button className="text-white text-sm md:text-base font-medium bg-main hover:bg-opacity-90 rounded-sm px-8 py-2">
            Apply Coupon
          </button>
        </div>
        <div className="flex flex-col gap-6 w-full md:w-1/2 border border-black p-8">
          <h3 className="font-medium text-xl">Cart Total</h3>
          <ul>
            <li className="flex justify-between items-center border-b-2 py-2">
              <p>Subtotal:</p>
              <p>${cartTotal}</p>
            </li>
            <li className="flex justify-between items-center border-b-2 py-2">
              <p>Shipping:</p>
              <p>Free</p>
            </li>
            <li className="flex justify-between items-center py-2">
              <p>Total:</p>
              <p>${cartTotal}</p>
            </li>
          </ul>
          <Link
            to={"/checkout"}
            className="text-white text-sm md:text-base font-medium bg-main hover:bg-opacity-90 rounded-sm px-6 py-2 w-1/2 text-center mx-auto"
          >
            Procees to checkout
          </Link>
        </div>
      </div>
    </main>
  );
}

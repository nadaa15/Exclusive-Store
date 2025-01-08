import React from "react";
import visa from "../assets/images/visa.png";
import master from "../assets/images/master.png";
import visa2 from "../assets/images/visa2.png";
import bkash from "../assets/images/bkash.png";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { removeAllCart } from "../Redux/CartSlice";
import Path from "./Path";
import { Helmet } from "react-helmet";
export default function Checkout() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  let location = useLocation();
  let path = location.pathname.slice(1);
  let pathname = path.charAt(0).toUpperCase() + path.slice(1);
  const cartTotal = cart.reduce(
    (total, product) => total + product.finalPrice * product.quantity,
    0
  );

  const removeCart = () => {
    dispatch(removeAllCart());
    navigate("/orderplaced");
  };

  return (
    <main className="container">
      <Helmet>
        <title>Checkout - Exclusive</title>
        <meta
          name="description"
          content="Securely complete your purchase at checkout. Review your order and provide payment and shipping details."
        />
      </Helmet>
      <Path prev={"Home/ Cart"} path={pathname} />

      <h2 className="text-4xl font-medium mb-12">Billing Details</h2>
      <section className="flex flex-col md:flex-row items-center gap-20 md:gap-40">
        <section className="w-full md:w-5/12">
          <form>
            <div className="grid gap-6 mb-6">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-gray-500 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-gray-500 dark:text-white"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-gray-500 dark:text-white"
                >
                  Street Adress
                </label>
                <input
                  type="text"
                  id="company"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-gray-500 dark:text-white"
                >
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  type="text"
                  id="company"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-gray-500 dark:text-white"
                >
                  Town/City
                </label>
                <input
                  type="text"
                  id="company"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-gray-500 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-gray-500 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                  required
                />
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 border border-gray-300 rounded-sm checked:bg-main bg-gray-50 focus:ring-offset-0 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </section>
        <section className="w-full md:w-5/12 flex flex-col gap-8 -order-1 md:order-2">
          {cart.map((product) => (
            <div className="flex justify-between items-center text-black">
              <div className="flex items-center gap-4">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-[80px]"
                  loading="lazy"
                />
                <p>{product.title}</p>
              </div>
              <p>
                $
                {Math.floor(
                  product.price - (product.price * product.discount) / 100
                )}
              </p>
            </div>
          ))}
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
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  defaultValue
                  name="default-radio"
                  className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Bank
                </label>
              </div>

              <div className="flex items-center gap-4">
                <img src={bkash} alt="bKash card" />
                <img src={visa} alt="Visa card" />
                <img src={master} alt="Master card" />
                <img src={visa2} alt="Card" />
              </div>
            </div>
            <div className="flex items-center">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Cash on delivery
              </label>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="rounded-md pe-8 py-2 w-1/2"
            />
            <button className="text-white text-sm md:text-base font-medium bg-main hover:bg-opacity-90 rounded-md px-8 py-2">
              Apply Coupon
            </button>
          </div>
          <button
            onClick={removeCart}
            className="text-white font-medium bg-main hover:bg-opacity-90 rounded-md px-8 py-2 w-full md:w-1/3 text-center"
          >
            Place Order
          </button>
        </section>
      </section>
    </main>
  );
}

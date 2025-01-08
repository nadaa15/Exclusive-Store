import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, searchProducts } from "../Redux/ProductsSlice";
import { getAuth, signOut } from "firebase/auth";

export default function Navbar() {
  let { userLogin, setUserLogin } = useContext(UserContext);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogOut() {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        setUserLogin(null);
        localStorage.removeItem("userID");
        navigate("/login");
      })
      .catch((error) => {
          console.error("Error signing out user: ", error);
      });
  }

  function handleSearch(term) {
    setSearchValue(term);

    if (term === "") {
      dispatch(getProducts);
      navigate("/products");
    } else {
      dispatch(searchProducts(term));
      navigate("/searchedproducts");
    }
  }

  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0 w-full z-40 shadow-[0px_1px_0px_gray]">
        {userLogin?<div className="bg-black text-white text-center p-3 text-sm">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link to={"/products"} className="ms-2 font-semibold underline">Shop Now</Link>
          </p>
        </div>:""}
        
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
          <Link
            to={"/"}
            className="flex items-center"
          >
            <span className="self-center text-lg md:text-2xl font-bold whitespace-nowrap dark:text-white">
              Exclusive
            </span>
          </Link>
          {userLogin ? (
            <div className="flex justify-center items-center gap-2 md:order-2 ms-auto md:ms-0">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 end-0 pe-4 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-black dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full me-8 py-2 px-4 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="What are you looking for?"
                  value={searchValue}
                  onChange={(e) => {
                    handleSearch(e.target.value);
                  }}
                />
              </div>
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div className="flex items-center gap-4">
                <NavLink to="wishlist" className="relative">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="30px"
                    width="30px"
                    className=" text-zinc-700 hover:text-main transition-all duration-300 cursor-pointer"
                  >
                    <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
                  </svg>
                  <div className="absolute bg-main w-4 h-4 -top-2 -right-1 text-white flex justify-center items-center text-xs rounded-full">
                    {wishlist === null ? (
                      <i className="fa-solid fa-spinner fa-spin"></i>
                    ) : (
                      wishlist.length || 0
                    )}
                  </div>
                </NavLink>
                <NavLink to="cart" className="relative">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="30px"
                    width="30px"
                    className=" text-zinc-700 hover:text-main transition-all duration-300 cursor-pointer"
                  >
                    <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
                  </svg>
                  <div className="absolute bg-main w-4 h-4 -top-2 -right-1 text-white flex justify-center items-center text-xs rounded-full">
                    {cart === null ? (
                      <i className="fa-solid fa-spinner fa-spin"></i>
                    ) : (
                      cart.length || 0
                    )}
                  </div>
                </NavLink>
                <div className="relative group flex justify-center items-center">
                  <button
                    className="flex justify-center items-center w-8 h-8 text-zinc-700 hover:bg-main hover:text-white rounded-full transition-all duration-300 cursor-pointer"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa-regular fa-user fa-xl"></i>
                  </button>
                  <div
                    className="absolute z-50 w-56 -bottom-[200px] left-[60px] p-4 rounded-md bg-black bg-opacity-0 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50 group-hover:-left-[180px] transition-all duration-300"
                    aria-hidden="true"
                  >
                    <ul>
                      <li>
                        <NavLink
                          to="/account"
                          className="flex items-center gap-4 text-sm mb-1 text-white hover:text-main hover:bg-white p-1 rounded-md transition-all duration-200"
                        >
                          <i className="fa-regular fa-user"></i>
                          <p>Manage my Account</p>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/checkout"}
                          className="flex items-center gap-4 text-sm mb-1 text-white hover:text-main hover:bg-white p-1 rounded-md transition-all duration-200"
                        >
                          <i className="fa-regular fa-calendar-check"></i>
                          <p>My Orders</p>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="flex items-center gap-4 text-sm mb-1 text-white hover:text-main hover:bg-white p-1 rounded-md transition-all duration-200">
                          <i className="fa-regular fa-circle-xmark"></i>
                          <p>My Cancellations</p>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="flex items-center gap-4 text-sm mb-1 text-white hover:text-main hover:bg-white p-1 rounded-md transition-all duration-200">
                          <i className="fa-regular fa-star"></i>
                          <p>My Reviews</p>
                        </NavLink>
                      </li>
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="flex items-center gap-4 text-sm mb-1 text-white hover:text-main hover:bg-white p-1 rounded-md transition-all duration-200"
                          aria-label="Logout"
                        >
                          <i className="fa-solid fa-arrow-right-from-bracket"></i>
                          <p>Logout</p>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="What are you looking for?"
                value={searchValue}
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
              />
            </div>

            
            {userLogin ? (
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    to=""
                    className={({ isActive }) => {
                      return `relative before:bg-gray-700 before:h-[1px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                        isActive ? `before:w-full` : "before:w-0"
                      }`;
                    }}
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive }) => {
                      return `relative before:bg-gray-700 before:h-[1px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                        isActive ? `before:w-full` : "before:w-0"
                      }`;
                    }}
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => {
                      return `relative before:bg-gray-700 before:h-[1px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                        isActive ? `before:w-full` : "before:w-0"
                      }`;
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => {
                      return `relative before:bg-gray-700 before:h-[1px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                        isActive ? `before:w-full` : "before:w-0"
                      }`;
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    className={({ isActive }) => {
                      return `relative before:bg-gray-700 before:h-[1px] before:absolute before:left-0 before:-bottom-1 hover:before:w-full before:transition-all duration-300 cursor-pointer ${
                        isActive ? `before:w-full` : "before:w-0"
                      }`;
                    }}
                  >
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

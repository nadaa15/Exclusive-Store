import React, { useEffect, useState } from 'react'
import speaker from '../assets/images/speaker.png'
import { Link } from 'react-router-dom';
import FlashSale from './FlashSale';
import CategorySlider from './CategorySlider';
import BestSelling from './BestSelling';
import OurProducts from './OurProducts';
import NewArrival from './NewArrival';
import axios from 'axios';
import HomeSlider from './HomeSlider';
import { Helmet } from 'react-helmet';
export default function Home() {
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  const [categories, setCategories] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let womenFashion = categories.filter((category) => category.slug.includes("women"))
  let menFashion = categories.filter((category) => category.name.includes("Men"))
  

  // Fetch categories from API
  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen)
  }


  useEffect(() => {
      getCategories();
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
      return () => clearInterval(interval);
  }, []);
  
  
  return (
    <>
      <Helmet>
        <title>Home - Exclusive</title>
        <meta
          name="description"
          content="Welcome to Exclusive! Explore the latest deals, featured products, and exclusive categories. Shop now for the best online shopping experience."
        />
        <meta
          name="keywords"
          content="ecommerce, online shopping, deals, featured products, best prices, categories"
        />
      </Helmet>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 container">
        <aside className="w-1/2 md:w-1/4">
          <button
            className="block md:hidden bg-main text-white p-2 rounded fixed z-30"
            onClick={() => toggleSidebar()}
          >
            Categories
          </button>
          <ul
            id="sidebar"
            className={`text-sm font-semibold flex flex-col gap-4 fixed top-0 left-0 z-20 mt-32 md:mt-0 bg-white pt-16 md:pt-0  border-e-[1px] md:relative h-full transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 transition-transform duration-300 ease-in-out ps-10 md:ps-0 pe-20`}
          >
            <li className="hover:shadow-xl">
              <div className="flex gap-4 items-center group cursor-pointer relative">
                <p>Women's Fashion</p>
                <i className="fa-solid fa-chevron-right"></i>
                <ul className="flex flex-col gap-4 absolute top-0 right-60 group-hover:-right-full md:group-hover:-right-28 bg-black bg-opacity-0 group-hover:bg-opacity-50 opacity-0 group-hover:opacity-100 p-4 rounded-md text-white transition-all duration-300">
                  {womenFashion.map((item, index) => (
                    <li key={index} className="hover:text-red-800">
                      <Link to={`/categoryproducts/${item.slug}`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="hover:shadow-xl">
              <div className="flex gap-4 items-center group cursor-pointer relative">
                <p>Men's Fashion</p>
                <i className="fa-solid fa-chevron-right"></i>
                <ul className="flex flex-col gap-4 absolute top-0 right-60 group-hover:-right-[80%] md:group-hover:-right-14 bg-black bg-opacity-0 group-hover:bg-opacity-50 opacity-0 group-hover:opacity-100 p-4 rounded-md text-white transition-all duration-300">
                  {menFashion.map((item, index) => (
                    <li key={index} className="hover:text-red-800">
                      <Link to={`/categoryproducts/${item.slug}`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {categories
              .filter((category) =>
                category.slug.includes("men") ? "" : category
              )
              .slice(0, 10)
              .map((category, index) => (
                <li key={index} className="hover:shadow-xl">
                  <Link to={`/categoryproducts/${category.slug}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
          </ul>
        </aside>

        <header className=" w-full md:w-3/4 mt-8 md:mt-0">
          <HomeSlider />
        </header>
      </div>
      <main className="container">
        <FlashSale />
        <CategorySlider />
        <BestSelling />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full bg-black px-12 py-10 my-32">
          <div className="flex flex-col justify-center items-start gap-3 lg:px-6 text-white w-full md:w-1/2">
            <div className="flex justify-center gap-4 items-center">
              <span className="text-secondary">Categories</span>
            </div>
            <h3 className="font-semibold text-lg my-8">
              Enhance Your Music Experience
            </h3>
            <div className="flex items-center gap-1 md:gap-6">
              <div className="bg-white rounded-full p-4 text-black w-16 h-16 flex flex-col justify-center items-center">
                <span className="block font-semibold">{timeLeft.hours}</span>
                <span className="text-xs">Hours</span>
              </div>
              <div className="bg-white rounded-full p-4 text-black w-16 h-16 flex flex-col justify-center items-center">
                <span className="block font-semibold">{timeLeft.days}</span>
                <span className="text-xs">Days</span>
              </div>
              <div className="bg-white rounded-full p-4 text-black w-16 h-16 flex flex-col justify-center items-center">
                <span className="block font-semibold">{timeLeft.minutes}</span>
                <span className="text-xs">Minutes</span>
              </div>
              <div className="bg-white rounded-full p-4 text-black w-16 h-16 flex flex-col justify-center items-center">
                <span className="block font-semibold">{timeLeft.seconds}</span>
                <span className="text-xs">Seconds</span>
              </div>
            </div>
            <button className="bg-secondary px-6 py-3 mt-10 hover:bg-opacity-80">
              <Link className="font-medium">Buy Now!</Link>
            </button>
          </div>
          <div className="p-6 w-full md:w-1/2 -order-1 md:order-2">
            <img src={speaker} className="w-full" alt="iPhone 14 image" />
          </div>
        </div>
        <OurProducts />
        <NewArrival />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-36">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="bg-slate-300 w-16 h-16 rounded-full flex justify-center items-center">
              {" "}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                viewBox="0 0 24 24"
                height="50px"
                width="50px"
                className="text-white bg-black  p-2 rounded-full"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M9 17 A2 2 0 0 1 7 19 A2 2 0 0 1 5 17 A2 2 0 0 1 9 17 z" />
                <path d="M19 17 A2 2 0 0 1 17 19 A2 2 0 0 1 15 17 A2 2 0 0 1 19 17 z" />
                <path d="M5 17H3v-4M2 5h11v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5M3 9h4" />
              </svg>{" "}
            </div>
            <h3 className="font-semibold text-xl">FREE AND FAST DELIVERY</h3>
            <p className="text-sm">Free delivery for all orders over $140</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="bg-slate-300 w-16 h-16 rounded-full flex justify-center items-center">
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="50px"
                width="50px"
                className="text-white bg-black  p-2 rounded-full"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M22 17.002a6.002 6.002 0 01-4.713 5.86l-.638-1.914A4.003 4.003 0 0019.465 19H17a2 2 0 01-2-2v-4a2 2 0 012-2h2.938a8.001 8.001 0 00-15.876 0H7a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5.002zM20 17v-4h-3v4h3zM4 13v4h3v-4H4z" />
              </svg>{" "}
            </div>
            <h3 className="font-semibold text-xl">24/7 CUSTOMER SERVICE</h3>
            <p className="text-sm">Friendly 24/7 customer support</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="bg-slate-300 w-16 h-16 rounded-full flex justify-center items-center">
              {" "}
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="50px"
                width="50px"
                className="text-white bg-black  p-2 rounded-full"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={30}
                  d="M336 176L225.2 304 176 255.8"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={30}
                  d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z"
                />
              </svg>{" "}
            </div>
            <h3 className="font-semibold text-xl">MONEY BACK GUARANTEE</h3>
            <p className="text-sm">We reurn money within 30 days</p>
          </div>
        </div>
      </main>
    </>
  );
}

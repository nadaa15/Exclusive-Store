import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';

export default function OrderPlaced() {
  const {userName} = useContext(UserContext)
  return (
    <main className="w-full h-screen flex flex-col gap-4 justify-center items-center">
      <i className="fa-regular fa-circle-check text-main text-8xl"></i>
      <p className="text-gray-500 font-semibold">Hey {userName},</p>
      <h2 className="text-3xl font-bold">Your Order is Confirmed</h2>
      <p className="text-gray-500 font-semibold">
        Thank you for shopping in Exclusive
      </p>
      <Link
        to={"/"}
        className="text-white font-medium bg-main hover:bg-opacity-90 rounded-md px-6 py-2 w-fit text-center mx-auto"
      >
        Continue Shopping
      </Link>
    </main>
  );
}

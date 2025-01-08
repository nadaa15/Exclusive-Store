import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="w-full h-screen flex flex-col gap-10 justify-center items-center">
      <h2 className="text-8xl font-bold">404 Not Found</h2>
      <p>
        Your visited page not found. You may go home page.
      </p>
      <Link
        to={"/"}
        className="mt-10 text-white font-medium bg-main hover:bg-opacity-90 rounded-md px-6 py-2 w-fit text-center mx-auto"
      >
        Back to home page
      </Link>
    </main>
  );
}

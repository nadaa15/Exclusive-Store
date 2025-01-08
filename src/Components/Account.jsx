import { useLocation } from "react-router-dom";
import Path from "./Path";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Helmet } from "react-helmet";


export default function Account() {
      let { userName, userEmail } = useContext(UserContext);

  let location = useLocation();
  let path = location.pathname.slice(1);



    return (
      <div className="container">
        <Helmet>
          <title>My Account - Exclusive</title>
          <meta
            name="description"
            content="Manage your Exclusive account details, view your orders, and update your preferences for a seamless shopping experience."
          />
        </Helmet>
        <div className="flex justify-between items-center">
          <Path prev={"Home"} path={"My Account"} />
          <h2 className="text-sm">
            Welcom <span className="text-main">{userName}</span>
          </h2>
        </div>
        <div className="pt-20 px-2 flex flex-col md:flex-row justify-center items-start gap-4">
          <div className="w-full h-full md:w-1/4 p-6 rounded  bg-white">
            <div className="flex flex-col gap-6 mb-6">
              <div className="flex flex-col justify-center gap-4">
                <p className="text-base text-text-3 font-medium">
                  Manage My Account
                </p>
                <ul className="ms-6 flex flex-col gap-2">
                  <li className="text-main">My Profile</li>
                  <li>Adress Book</li>
                  <li>My Payment Options</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-6 mb-4">
              <div className="flex flex-col justify-center gap-4">
                <p className="text-base text-text-3 font-medium">My Orders</p>
                <ul className="ms-6 flex flex-col gap-2">
                  <li>My Returns</li>
                  <li>My Cancellation</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col justify-center gap-4">
                <p className="text-base text-text-3 font-medium">My Wishlist</p>
              </div>
            </div>
          </div>
          <div className="w-full h-full md:w-3/4 px-8 py-10 rounded shadow-[0_1px_13px_rgba(0,0,0,0.05)] bg-white">
            <form className="space-y-4">
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-8">
                  <div className="w-1/2">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-black dark:text-white"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-100 border border-gray-100 text-gray-900 text-sm focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                      placeholder={userName?.split(" ")[0]}
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-black dark:text-white"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-gray-100 border border-gray-100 text-gray-900 text-sm focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                      placeholder={userName?.split(" ")[1]}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-1/2">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-black dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-100 border border-gray-100 text-gray-900 text-sm focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                      placeholder={userEmail}
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="adress"
                      className="block mb-2 text-black dark:text-white"
                    >
                      Adress
                    </label>
                    <input
                      type="text"
                      id="adress"
                      className="bg-gray-100 border border-gray-100 text-gray-900 text-sm focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                      placeholder="Kingston, 5236, United State"
                    />
                  </div>
                </div>
                <h3>Password Changes</h3>
                <div className="flex flex-col justify-center gap-8">
                  <div className="w-full">
                    <input
                      type="password"
                      id="currentPassword"
                      className="bg-gray-100 border border-gray-100 text-gray-900 text-sm focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                      placeholder="Current Password"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="password"
                      id="newPassword"
                      className="bg-gray-100 border border-gray-100 text-gray-900 text-sm focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                      placeholder="New Password"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="password"
                      id="cNewPass"
                      className="bg-gray-100 border border-gray-100 text-gray-900 text-sm focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                      placeholder="Confirm New Password"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-8 mt-8">
                <button
                  type="submit"
                  className="text-blac font-medium hover:text-main"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white font-medium bg-main hover:bg-opacity-90 rounded-md px-6 py-2 w-fit text-center"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

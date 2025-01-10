import React from 'react'
import send from '../assets/images/Vector.svg'
import qrcode from '../assets/images/Qrcode 1.png'
import googleplay from '../assets/images/google-play.png'
import appstore from '../assets/images/download-appstore.png'

export default function Footer() {
  return (
    <footer className="w-full bg-black pt-6">
      <div className="mx-auto w-full max-w-screen-xl text-white">
        <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 sm:grid-cols-2 md:grid-cols-5">
          <div>
            <h2 className="mb-6 text-xl font-medium">Exclusive</h2>
            <ul className="">
              <li className="mb-4">Subscribe</li>
              <li className="mb-4">Get 10% off your first order</li>
              <li className="mb-4">
                <div className="relative">
                  <input
                    type="email"
                    id="input-group-1"
                    className="bg-transparent border border-gray-300 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-6 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                  <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                    <img src={send} alt="send email icon" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-medium">Support</h2>
            <ul>
              <li className="mb-4">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </li>
              <li className="mb-4">exclusive@gmail.com</li>
              <li className="mb-4">+88015-88888-9999</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-medium">Account</h2>
            <ul>
              <li className="mb-4">My Account</li>
              <li className="mb-4">Login / Register</li>
              <li className="mb-4">Cart</li>
              <li className="mb-4">Wishlist</li>
              <li className="mb-4">Shop</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-medium">Quick Link</h2>
            <ul>
              <li className="mb-4">Privacy Policy</li>
              <li className="mb-4">Terms Of Use</li>
              <li className="mb-4">FAQ</li>
              <li className="mb-4">Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-medium">Download App</h2>
            <ul>
              <li className="mb-4 text-xs font-medium">
                <span>Save $3 with App New User Only</span>
              </li>
              <li className="mb-4 flex items-center gap-2">
                <img src={qrcode} alt="Qrcode" />
                <div>
                  <img src={googleplay} alt="Google play logo" />
                  <img src={appstore} alt="App store logo" />
                </div>
              </li>
              <li className="mb-4">
                <div className="flex items-center gap-4">
                  <a href="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 text-gray-600 bg-black dark:bg-gray-700 flex justify-center items-center border-t-[1px] border-white border-opacity-10">
        <span>© Copyright Rimel 2022. All right reserved</span>
      </div>
    </footer>
  );
}

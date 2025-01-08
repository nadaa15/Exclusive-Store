import React, { useContext, useEffect, useState } from "react";
import signupImg from "../assets/images/dl.beatsnoop 1.png";
import { Link, useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../config/firebase";
import { UserContext } from "../Contexts/UserContext";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

export default function Signup() {
    let { userLogin, setUserLogin, setUserName } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const currentUser = userCredential.user;
      localStorage.setItem("userID", currentUser.uid);
      setUserLogin(currentUser.uid);
      setUserName(currentUser.displayName || "User"); // Fallback to 'User'

      toast.success(`Welcome ${currentUser.displayName || "User"}!`);
      navigate("/");
    } catch (error) {
      console.log(error);
      
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/invalid-email":
        case "auth/user-not-found":
        case "auth/wrong-password":
          setFirebaseError("Invalid email or password.");
          break;
        case "auth/too-many-requests":
          setFirebaseError("Too many login attempts. Please try again later.");
          break;
        default:
          setFirebaseError("An unexpected error occurred. Please try again.");
          break;
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (userLogin) {
        navigate("/");
      }
    }, 1000);
    
  }, [])
  

  return (
    <main>
      <Helmet>
        <title>Login - Exclusive</title>
        <meta
          name="description"
          content="Access your Exclusive account to manage orders, track your wishlist, and enjoy a personalized shopping experience."
        />
      </Helmet>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 container">
        <div className="w-full md:w-1/2">
          <img src={signupImg} alt="Signup Illustration" className="w-full" loading="lazy"/>
        </div>
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
            <div className="mb-8">
              <h2 className="text-main text-3xl font-bold mb-4">
                Log in to Exclusive
              </h2>
              <p>Enter your details below</p>
            </div>

            <div className="relative mb-6">
              <input
                type="email"
                id="email"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-main peer"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] start-2.5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Email or Phone Number
              </label>
            </div>

            <div className="relative mb-6">
              <input
                type="password"
                id="password"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-main peer"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] start-2.5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Password
              </label>
            </div>

            {firebaseError && (
              <div
                className="p-4 mb-4 text-sm text-red-800 bg-red-50 rounded-lg"
                role="alert"
              >
                {firebaseError}
              </div>
            )}

            <div className="flex flex-col justify-center items-center w-full">
              <button
                type="submit"
                className="mb-3 w-full text-white bg-[#DB4444] hover:bg-opacity-95 font-semibold text-md px-14 py-2.5 text-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  "Log In"
                )}
              </button>
              <p className="mt-4">
                Don't have an account?{" "}
                <span className="text-main font-medium border-b-[2px] pb-1 border-black">
                  <Link to="/signup">Sign up</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

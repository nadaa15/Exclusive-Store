import React, { useContext, useState } from "react";
import signupImg from "../assets/images/dl.beatsnoop 1.png";
import googleIcon from "../assets/images/Icon-Google.png";
import { Link, useNavigate } from "react-router-dom";
 import { toast } from "react-hot-toast";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { UserContext } from "../Contexts/UserContext";
import { Helmet } from "react-helmet";

export default function Signup() {
    let { setUserLogin, setUserName } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSubmit = async (event) => {
   event.preventDefault();
   setIsLoading(true);
   try {
     const userCredential = await createUserWithEmailAndPassword(
       auth,
       email,
       password
     );
     await updateProfile(userCredential.user, { displayName: name });
     localStorage.setItem("userID", userCredential.user.uid);

     const updatedUser = await getAuth().currentUser; // Fetch the updated user profile
     setUserLogin(updatedUser.uid);
     setUserName(updatedUser.displayName);
     toast.success(`Welcome ${updatedUser.displayName}!`);
     navigate("/");
   } catch (error) {
     const errorCode = error.code;
     let errorMessage = "Error creating account. Please try again.";
     switch (errorCode) {
       case "auth/invalid-email":
         errorMessage = "Invalid Email.";
         break;
       case "auth/email-already-in-use":
         errorMessage = "Email already exists.";
         break;
       case "auth/weak-password":
         errorMessage = "Password is too weak.";
         break;
       case "auth/too-many-requests":
         errorMessage = "Too many requests. Try again later.";
         break;
     }
     setFirebaseError(errorMessage);
   } finally {
     setIsLoading(false);
   }
 };

 

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      toast.success(`Welcome ${user.displayName}!`);
      localStorage.setItem("userID", user.uid);
      setUserLogin(user.uid);
      navigate("/");
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      toast.error("Failed to sign in with Google.");
    }
  };


  return (
    <main>
      <Helmet>
        <title>Create an Account - Exclusive</title>
        <meta
          name="description"
          content="Sign up for an Exclusive account to enjoy a personalized shopping experience, faster checkout, and exclusive deals."
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
                Create an account
              </h2>
              <p>Enter your details below</p>
            </div>

            <div className="relative mb-6">
              <input
                type="text"
                id="name"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-main peer"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] start-2.5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Name
              </label>
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
                  "Create Account"
                )}
              </button>
              <button
                onClick={signInWithGoogle}
                className="w-full flex justify-center items-center gap-3 text-black bg-gray-50 hover:bg-opacity-95 font-semibold text-md px-14 py-2.5 text-center border"
              >
                <img src={googleIcon} alt="Google icon" className="w-5" />
                <span>Sign up with Google</span>
              </button>
              <p className="mt-4">
                Already have an account?{" "}
                <span className="text-main font-medium border-b-[2px] pb-1 border-black">
                  <Link to="/login">Log in</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

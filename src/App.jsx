import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'
import About from './Components/About'
import NotFound from './Components/NotFound'
import ProtectedRoute from './Components/ProtectedRoute'
import UserContextProvider from './Contexts/UserContext'
import { Toaster } from "react-hot-toast";
import AllProducts from './Components/AllProducts'
import CategoryProducts from './Components/CategoryProducts'
import ProductDetails from './Components/ProductDetails'
import Cart from './Components/Cart'
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Redux/Store";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import SearchedProducts from './Components/SearchedProducts'
import WishList from './Components/WishList'
import Checkout from './Components/Checkout'
import OrderPlaced from './Components/OrderPlaced'
import Contact from './Components/Contact'
import Account from './Components/Account'

export default function App() {
  const route = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoute>
              <AllProducts />
            </ProtectedRoute>
          ),
        },
        {
          path: "searchedproducts",
          element: (
            <ProtectedRoute>
              <SearchedProducts />
            </ProtectedRoute>
          ),
        },
        {
          path: "categoryproducts/:name",
          element: (
            <ProtectedRoute>
              <CategoryProducts />
            </ProtectedRoute>
          ),
        },
        {
          path: "productdetails/:id/:category",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "about",
          element: (
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          ),
        },
        {
          path: "contact",
          element: (
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          ),
        },
        {
          path: "account",
          element: (
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          ),
        },
        {
          path: "/checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "/orderplaced",
          element: (
            <ProtectedRoute>
              <OrderPlaced />
            </ProtectedRoute>
          ),
        },
        { path: "signup", element: <Signup /> },
        { path: "login", element: <Login /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <UserContextProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={route}></RouterProvider>
          <Toaster />{" "}
        </PersistGate>
      </Provider>
    </UserContextProvider>
  );
}

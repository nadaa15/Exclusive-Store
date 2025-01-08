import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  loading: false,
  error: null,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      const quantityToAdd = action.payload.quantity || 1;

      if (existingProduct) {
        existingProduct.quantity += quantityToAdd;
      } else {
        state.cart.push({ ...action.payload, quantity: quantityToAdd });
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
      toast.success("Product added successfully");
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateQuantity: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeAllCart: (state, action) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, removeAllCart } = CartSlice.actions;
export default CartSlice.reducer;

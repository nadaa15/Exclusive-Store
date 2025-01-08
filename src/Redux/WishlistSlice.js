import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  loading: false,
  error: null,
};

export const WishlistSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const existingProduct = Array.isArray(state.wishlist)
        ? state.wishlist.find((product) => product.id === action.payload.id)
        : null;

      if (existingProduct) {
        toast.error("Product already in wishlist");
      } else {
        if (Array.isArray(state.wishlist)) {
          state.wishlist.push({ ...action.payload });
        } else {
          state.wishlist = [{ ...action.payload }];
        }
        toast.success("Product added successfully to wishlist");
      }

      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeAllWishlist: (state, action) => {
      state.wishlist = []
      localStorage.removeItem("wishlist");
    },
  },
});

export const { addToWishlist, removeFromWishlist, removeAllWishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer;

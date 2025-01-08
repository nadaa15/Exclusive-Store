import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  total:0,
    loading: false,
    error: null
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=190`
      );
      return response.data.products;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);

export const getProductsByPage = createAsyncThunk(
  "products/getProductsByPage",
  async (currentPage, { rejectWithValue }) => {
    const itemsPerPage = 20;
    const skip = (currentPage - 1) * itemsPerPage;
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`
      );
      return { products: response.data.products, total: response.data.total };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);
export const getProductsByCategory = createAsyncThunk(
  "products/getProductsByCategory",
  async (category, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      return response.data.products;
    } catch (error) {
      
      return rejectWithValue(
        error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);

export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (term, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${term}`
      );
      return response.data.products;
    } catch (error) {
      
      return rejectWithValue(
        error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Cases for getProducts
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Cases for getProductsByPage
      .addCase(getProductsByPage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsByPage.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.total = action.payload.total;
      })
      .addCase(getProductsByPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Cases for getProductsByCategory
      .addCase(getProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Cases for searchProducts
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export default ProductsSlice.reducer;

// productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    filteredProducts: [],
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setAllProducts, setFilteredProducts } = productsSlice.actions;
export const selectAllProducts = (state) => state.products.allProducts;
export const selectFilteredProducts = (state) => state.products.filteredProducts;

export default productsSlice.reducer;

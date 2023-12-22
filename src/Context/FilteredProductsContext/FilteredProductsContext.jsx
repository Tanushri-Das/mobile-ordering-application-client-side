// FilteredProductsContext.jsx
import React, { createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredProducts, setFilteredProducts } from '../../redux/productsSlice';


const FilteredProductsContext = createContext();

export const useFilteredProducts = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);

  const updateFilteredProducts = (data) => {
    dispatch(setFilteredProducts(data));
  };

  const setAllProductsInStore = (data) => {
    dispatch(setAllProducts(data));
  };

  return {
    filteredProducts,
    updateFilteredProducts,
    setAllProductsInStore,
  };
};

export const FilteredProductsProvider = ({ children }) => {
  return <FilteredProductsContext.Provider value={{}}>{children}</FilteredProductsContext.Provider>;
};

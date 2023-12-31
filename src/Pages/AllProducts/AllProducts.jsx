import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Products from "../Products/Products";
import {
  selectAllProducts,
  selectFilteredProducts,
  setAllProducts,
} from "../../redux/productsSlice";

const AllProducts = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);
  const filteredProducts = useSelector(selectFilteredProducts);

  useEffect(() => {
    // Fetch all products only if allProducts is empty
    if (allProducts.length === 0) {
      fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => dispatch(setAllProducts(data)))
        .catch((error) => console.error("Error fetching all products:", error));
    }
  }, [allProducts, dispatch]);

  const displayProducts =
    filteredProducts.length > 0 ? filteredProducts : allProducts;

  return (
    <div className="my-12">
      <h3 className="text-4xl text-center mb-12 font-bold">
        {filteredProducts.length > 0 ? "Searched Products" : "All Products"}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-20">
        {displayProducts.map((product) => (
          <Products key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

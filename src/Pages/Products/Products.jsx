import React from "react";
import "./Products.css";

const Products = ({ product }) => {
  const { name, img, price, type, processor, memory, OS } = product;
  return (
    <div className="product">
      <img src={img} alt={name} className="product-img" />
      <div className="mx-4 mt-5">
        <p className="text-2xl font-bold mb-4">Name: {name}</p>
        <p className="text-lg font-semibold mb-4">Price : {price}</p>
        <p className="text-lg font-semibold mb-4">Type : {type}</p>
        <p className="text-lg font-semibold mb-4">Processor : {processor}</p>
        <p className="text-lg font-semibold mb-4">Memory : {memory}</p>
        <p className="text-lg font-semibold mb-4">Operating System : {OS}</p>
      </div>
      <div className="mt-20">
        <div className="btn-div">
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Products;

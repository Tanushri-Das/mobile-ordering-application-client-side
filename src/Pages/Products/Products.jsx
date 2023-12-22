import React from "react";
import "./Products.css";

const Products = ({ product }) => {
  const { name, img, price, type, processor, memory, OS } = product;
  return (
    <div className="product">
      <img src={img} alt={name} className="product-img" />
      <p className="text-xl font-semibold text-center mb-4">Name : {name}</p>
      <p className="text-[16px] text-center mb-4">price : ${price}</p>
      <p className="text-[16px] text-center mb-4">Type : ${type}</p>
      <p className="text-[16px] text-center mb-4">Processor : ${processor}</p>
      <p className="text-[16px] text-center mb-4">Memory : ${memory}</p>
      <p className="text-[16px] text-center mb-4">Operating System : ${OS}</p>
      <div className="btn-div">
        {/* Add to Cart button with onClick handler */}
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Products;

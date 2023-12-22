import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaShoppingBasket } from "react-icons/fa";

import "./Header.css";
import { setFilteredProducts } from "../../../redux/productsSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleSearch = () => {
    fetch(`http://localhost:5000/search?name=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setFilteredProducts(data));
        console.log("Filtered Products:", data);
      });

    // Fetch all products
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setAllProducts(data));
      })
      .catch((error) => console.error("Error fetching all products:", error));
  };

  return (
    <header className="shadow-lg">
      <div className="header-container">
        <Link to="/" className="app-name">
          <FaShoppingBasket className="basket" /> SmartBasket
        </Link>

        <div className="nav-links">
          <NavLink to="/" className="home-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/productList" className="home-link" onClick={closeMenu}>
            ProductList
          </NavLink>
          <NavLink
            to="/checkout"
            className="shopping-cart-icon"
            onClick={closeMenu}
          >
            <FaShoppingCart />
          </NavLink>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search mobiles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>

      {showMenu && (
        <div className="responsive-menu">
          <NavLink to="/" className="home-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/productList" className="home-link" onClick={closeMenu}>
            ProductList
          </NavLink>
          <NavLink
            to="/checkout"
            className="shopping-cart-icon"
            onClick={closeMenu}
          >
            <FaShoppingCart />
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;

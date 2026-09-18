import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_buttons">
        <Link to="/" className="button">
          Home
        </Link>
        <Link to="/categories" className="button">
          Categories
        </Link>
        <Link to="/products" className="button">
          Products
        </Link>
        <Link to="/new" className="button">
          New
        </Link>
        <Link to="/login" className="banner-login-btn">
          Login
        </Link>
        <Link to="/cart" className="banner-cart-btn">
          Cart
        </Link>
      </div>
    </div>
  );
}

export default Banner;
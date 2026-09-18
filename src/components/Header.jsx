import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../assets/q-light.png";

function Header({ cartCount = 0 }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const submitSearch = (event) => {
    event.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <Link to="/" className="logo-link">
          <img
            src={logo}
            alt="Q LIGHT"
            className="logo"
          />
        </Link>
      </div>

      <nav className="header-nav">
        <Link to="/" className="nav-item">
          Home
        </Link>

        <Link to="/categories" className="nav-item">
          Categories
        </Link>

        <Link to="/products" className="nav-item">
          Products
        </Link>
      </nav>
      <button
          className="add-product-btn"
           onClick={() =>
            window.location.href = "http://127.0.0.1:8000/add-product/"
           }
           >
          Add Product
           </button>
    

      <form className="header-search-box" onSubmit={submitSearch}>
        <input
          className="header-search-input"
          type="search"
          placeholder="Search products..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search products"
        />
        <button className="header-search-button" type="submit">Search</button>
      </form>

      <div className="header-actions">
        <Link
          to="/cart"
          className="cart-link"
          aria-label="Cart"
        >
          <span className="cart-icon"></span>

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </Link>

        <Link
          to="/login"
          className="login-btn"
        >
          Login
        </Link>
      </div>
    </header>
  );
}

export default Header;
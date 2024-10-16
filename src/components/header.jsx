import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import { FaHeart, FaShoppingBag } from "react-icons/fa";

const Header = () => {
  const [bagItemsCount] = useState(0);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://tatacliq-backend-2.onrender.com/api/products/search?q=${query}`
      );
      setProducts(response.data);
      if (!response) {
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-bar-left">
          <Link to="/luxury" className="luxury-link">
            Tata CLiQ Luxury
          </Link>
        </div>
        <div className="top-bar-right">
          <Link to="/cliq-cash">CLiQ Cash</Link>
          <Link to="/gift-card">Gift Card</Link>
          <Link to="/cliq-care">CLiQ Care</Link>
          <Link to="/track-orders">Track Orders</Link>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>

      <div className="main-header">
        <div className="logo">
          <Link to="/">
            <img
              src="data:image/png;base64,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"
              alt="Tata CLiQ"
            />
          </Link>
        </div>
        <div className="dropdowns">
          <div className="dropdown">
            <button>Categories ▾</button>
            <div className="dropdown-content">
              <Link to="/category/Watches">Watches</Link>
              <Link to="/category/Kidswear">Kidswear</Link>
              <Link to="/category/Handbags">Hand-Bags</Link>
              <Link to="/category/Men's Wear">Mens Wear</Link>
              <Link to="/category/Women's Wear">Womens Wear</Link>
              <Link to="/category/Jewellery">Jwellery</Link>
              <Link to="/category/Footwear">Footwear</Link>
              <Link to="/category/Home & Living">Home & living</Link>
              <Link to="/category/Electronics">Gadgets</Link>
              <Link to="/category/Beauty">Beauty</Link>
            </div>
          </div>
          <div className="dropdown">
            <button>Brands ▾</button>
          </div>
        </div>
        <div className="search-bar">
          <div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products..."
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          {products.length > 0 && (
            <div className="results">
              <ul>
                {products.map((product) => (
                  <li key={product._id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {products.length === 0 && (
            <div className="no-results">
              <p>No products found</p>
            </div>
          )}
        </div>
        <div className="user-actions">
          <FaHeart className="icon" />

          <Link to="/bag" className="icon-link">
            <FaShoppingBag className="icon" />
            {bagItemsCount > 0 && (
              <span className="bag-count">{bagItemsCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

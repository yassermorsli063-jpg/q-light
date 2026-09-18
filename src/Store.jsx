import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Store.css';
import productImage from './assets/lustreled.jpg';

function Store() {
  const { id } = useParams();
  const isNew = id === 'new';

  return (
    <div className="store-page">
      <div className="store-header">
        <h1>{isNew ? 'New Product' : `Store Item ${id}`}</h1>
        <p>
          {isNew
            ? 'Discover the latest product with premium features and modern styling.'
            : `Details for store item ID "${id}".`}
        </p>
      </div>

      <div className="store-card">
        <img
          className="store-image"
          src={productImage}
          alt={isNew ? 'New product' : `Store item ${id}`}
        />
        <h2>{isNew ? 'Premium Smart Device' : 'Product Details'}</h2>
        <p>
          {isNew
            ? 'Fast, reliable, and built for modern workflows. Includes advanced monitoring, seamless connectivity, and a sleek finish.'
            : 'Use this page to show product information, pricing, and purchase actions for the selected item.'}
        </p>

        <div className="store-actions">
          <button className="store-buy-button">Buy Now</button>
          <Link to="/" className="store-button">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Store;
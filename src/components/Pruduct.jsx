import React from "react";
import "./Pruduct.css";


function Pruducts() {
  <Link to="/products" className="button">Products</Link>
  return (
    <section className="products">
      {data.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.url} alt={product.title} className="product-image" />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">Rs {product.price}</p>
        </div>
      ))}
    </section>
  );
}

export default Pruducts;

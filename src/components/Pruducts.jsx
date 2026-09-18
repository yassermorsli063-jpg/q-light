import React from "react";
import { Link } from "react-router-dom";
import "./Pruducts.css";
import catalogProducts from "./data";

function Pruducts({ cart, setCart }) {
  const products = catalogProducts.map((product) => ({
    ...product,
    name: product.title,
  }));



  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {

      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);

    }

    alert(`${product.name} added to cart`);
  };


  return (

    <div className="products-page">

      {/* HEADER */}

      <div className="products-header">

        <span>
          Q LIGHT COLLECTION
        </span>

        <h1>
          Our Products
        </h1>

        <p>
          Discover our premium lighting collection
        </p>

      </div>


      

      <div className="products-grid">

        {products.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

           

            <div className="product-image">

              <img
                src={product.image}
                alt={product.name}
              />

            </div>



            <div className="product-info">

              <span className="product-category">
                PREMIUM LIGHTING
              </span>

              <h2>
                {product.name}
              </h2>

              <p>
                {product.description}
              </p>


            

              <div className="product-bottom">

                <strong>
                  {product.price
                    ? `${product.price.toLocaleString()} DA`
                    : "View details"}
                </strong>


                <button
                  className="add-cart-button"
                  onClick={() =>
                    addToCart(product)
                  }
                >
                  Add to Cart
                </button>

              </div>


              {/* DETAILS */}

              <Link to={product.path} className="details-link">
                View Product
              </Link>

            </div>

          </div>

        ))}

      </div>



      <div className="cart-bottom">

        <Link
          to="/cart"
          className="go-cart"
        >
          Go to Cart ({cart.length})
        </Link>

      </div>

    </div>
  );
}

export default Pruducts;
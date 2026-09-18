
import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, setCart }) {

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <div className="cart-title">
        <span>Q</span>
        <h1>LIGHT SHOPPING CART</h1>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon"></div>
          <h2>Your cart is empty</h2>
          <p>Add your favorite Q LIGHT products.</p>
        </div>
      ) : (
        <div className="cart-container">

          <div className="cart-products">

            {cart.map((item) => (
              <div className="cart-product" key={item.id}>

                <div className="product-photo">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="product-details">

                  <span className="product-category">
                    {item.category}
                  </span>

                  <h2>{item.title}</h2>

                  <p className="product-price">
                    {item.price.toFixed(2)} DA
                  </p>

                  <div className="quantity-box">

                    <button onClick={() => decrease(item.id)}>
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increase(item.id)}>
                      +
                    </button>

                  </div>

                </div>

                <button
                  className="delete-product"
                  onClick={() => removeItem(item.id)}
                >
                  cart
                </button>

              </div>
            ))}

          </div>

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-line">
              <span>Products</span>
              <strong>{cart.length}</strong>
            </div>

            <div className="summary-line">
              <span>Delivery</span>
              <strong>Free</strong>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>{total.toFixed(2)} DA</strong>
            </div>

            <Link to="/checkout" className="checkout-button">
              Checkout
            </Link>

          </div>

        </div>
      )}

    </div>
  );
}

export default Cart;

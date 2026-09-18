import React, { useState } from "react";
import "./LusterCrystal.css";

import magivluster from "../assets/magiv luster.jpg";
import corona from "../assets/corona.jpg";
import images16 from "../assets/images (16).jpg";
import crestalGolde from "../assets/crestal golde.jpg";
import crestal from "../assets/crestal.jpg";
import critalin from "../assets/critalin.jpg";

function LusterCrystal({ cart, setCart }) {
  const products = [
    {
      id: "crystal-1",
      name: "Crystal Magic Luster",
      title: "Crystal Magic Luster",
      price: 12500,
      image: magivluster,
      category: "Crystal Lighting"
    },
    {
      id: "crystal-2",
      name: "Crystal Corona Luster",
      title: "Crystal Corona Luster",
      price: 14500,
      image: corona,
      category: "Crystal Lighting"
    },
    {
      id: "crystal-3",
      name: "Crystal Luxury Luster",
      title: "Crystal Luxury Luster",
      price: 18000,
      image: images16,
      category: "Crystal Lighting"
    },
    {
      id: "crystal-4",
      name: "Crystal Gold Luster",
      title: "Crystal Gold Luster",
      price: 22000,
      image: crestalGolde,
      category: "Crystal Lighting"
    },
    {
      id: "crystal-5",
      name: "Crystal Modern Luster",
      title: "Crystal Modern Luster",
      price: 19500,
      image: crestal,
      category: "Crystal Lighting"
    },
    {
      id: "crystal-6",
      name: "Crystal Premium Luster",
      title: "Crystal Premium Luster",
      price: 25000,
      image: critalin,
      category: "Crystal Lighting"
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const addToCart = () => {
    const existingProduct = cart.find(
      (item) => item.id === selectedProduct.id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === selectedProduct.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...selectedProduct,
          quantity: 1
        }
      ]);
    }
  };

  return (
    <div className="luster-page">
      <div className="luster-product">

        <div className="luster-gallery">

          <div className="luster-main-image">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
            />
          </div>

          <div className="luster-thumbnails">
            {products.map((product) => (
              <button
                key={product.id}
                className={`luster-thumbnail ${
                  selectedProduct.id === product.id
                    ? "active"
                    : ""
                }`}
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                />
              </button>
            ))}
          </div>

        </div>

        <div className="luster-info">

          <span>Q LIGHT COLLECTION</span>

          <h1>{selectedProduct.title}</h1>

          <div className="gold-line"></div>

          <p>
            Refined crystal-inspired lighting crafted
            to create a luxurious, elegant glow in
            premium interiors.
          </p>

          <h2>
            {selectedProduct.price.toLocaleString()} DA
          </h2>

          <button
            className="add-cart-luster"
            onClick={addToCart}
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default LusterCrystal;
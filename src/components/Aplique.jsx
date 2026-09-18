import React, { useState } from "react";
import "./Aplique.css";

import apliqueFeatured from "../assets/01_wall_sconce_daylight.png";
import apliqueMain from "../assets/images (15).jpg";
import apliqueAlt from "../assets/images (12).jpg";
import apliqueLifestyleOne from "../assets/ChatGPT Image 7 سبتمبر 2026، 04_51_16 م.png";
import apliqueLifestyleTwo from "../assets/ChatGPT Image 7 سبتمبر 2026، 04_50_58 م.png";

function Aplique({ cart, setCart }) {
  const [mainImage, setMainImage] = useState(apliqueFeatured);

  const addToCart = () => {
    const product = {
      id: "aplique",
      name: "Aplique",
      title: "Aplique",
      price: 9800,
      image: apliqueFeatured,
      category: "Wall Lighting"
    };
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const images = [
    apliqueFeatured,
    apliqueMain,
    apliqueAlt,
    apliqueLifestyleOne,
    apliqueLifestyleTwo,
  ];
  const imageNames = [
    "Aplique wall sconce",
    "Aplique front view",
    "Aplique side view",
    "Aplique room view",
    "Aplique evening view",
  ];

  return (
    <div className="luster-page">
      <div className="luster-product">
        <div className="luster-gallery">
          <div className="luster-main-image">
            <img src={mainImage} alt={imageNames[images.indexOf(mainImage)]} />
          </div>

          <div className="luster-thumbnails">
            {images.map((image, index) => (
              <button
                key={index}
                className="luster-thumbnail"
                onClick={() => setMainImage(image)}
              >
                <img src={image} alt={imageNames[index]} />
              </button>
            ))}
          </div>
        </div>

        <div className="luster-info">
          <span>Q LIGHT COLLECTION</span>
          <h1>Aplique</h1>
          <div className="gold-line"></div>
          <p>
            Elegant wall lighting designed to create a warm, atmospheric glow in
            every room.
          </p>
          <h2>9,800 DA</h2>
          <button className="add-cart-luster" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aplique;

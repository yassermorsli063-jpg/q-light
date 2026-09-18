import React, { useState } from "react";
import "./LusterLED.css";

import lusterled from "../assets/lusterled.jpg";
import lustere from "../assets/lustere.jpg";
import lusterRoom from "../assets/luster.jpg";
import mmexport1 from "../assets/mmexport1787244517810.jpg";
import mmexport2 from "../assets/mmexport1787244588032.jpg";
import mmexport3 from "../assets/mmexport1787244588108.jpg";
import mmexport4 from "../assets/mmexport1787244588180.jpg";
import mmexport5 from "../assets/mmexport1787244588262.jpg";
import mmexport6 from "../assets/mmexport1787244588335.jpg";
import mmexport7 from "../assets/mmexport1787244588427.jpg";
import mmexport8 from "../assets/mmexport1787244619229.jpg";
import mmexport9 from "../assets/mmexport1787244619350.jpg";
import mmexport10 from "../assets/mmexport1787244619428.jpg";
import mmexport11 from "../assets/mmexport1787244619509.jpg";
import mmexport12 from "../assets/mmexport1787244619580.jpg";
import mmexport13 from "../assets/mmexport1787244619651.jpg";
import mmexport14 from "../assets/mmexport1787244619730.jpg";
import mmexport15 from "../assets/mmexport1787244619807.jpg";
import mmexport16 from "../assets/mmexport1787244649361.jpg";
import mmexport17 from "../assets/mmexport1787244649438.jpg";
import mmexport18 from "../assets/mmexport1787244649527.jpg";
import mmexport19 from "../assets/mmexport1787244649717.jpg";
import mmexport20 from "../assets/mmexport1787244649801.jpg";
import mmexport21 from "../assets/mmexport1787244649876.jpg";
import mmexport22 from "../assets/mmexport1787244649947.jpg";
import mmexport23 from "../assets/mmexport1787244649997.jpg";

const mmexportImages = [
  mmexport1,
  mmexport2,
  mmexport3,
  mmexport4,
  mmexport5,
  mmexport6,
  mmexport7,
  mmexport8,
  mmexport9,
  mmexport10,
  mmexport11,
  mmexport12,
  mmexport13,
  mmexport14,
  mmexport15,
  mmexport16,
  mmexport17,
  mmexport18,
  mmexport19,
  mmexport20,
  mmexport21,
  mmexport22,
  mmexport23
];

function LusterLED({ cart, setCart }) {
  const [mainImage, setMainImage] = useState(lusterled);

  const images = [
    lusterled,
    lustere,
    lusterRoom,
    ...mmexportImages
  ];
  const imageNames = [
    "LED main lamp",
    "LED premium lamp",
    "LED room installation",
    ...mmexportImages.map((_, index) => `LED collection view ${index + 1}`),
  ];
  const productPrices = images.map(
    (_, index) => 8500 + index * 500
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const selectedPrice = productPrices[selectedImageIndex];

  const addToCart = () => {
    const selectedProduct = {
      id: `luster-led-${selectedImageIndex}`,
      name: `Luster LED ${selectedImageIndex + 1}`,
      title: `Luster LED ${selectedImageIndex + 1}`,
      price: selectedPrice,
      image: images[selectedImageIndex],
      category: "LED Lighting"
    };
    const existingProduct = cart.find((item) => item.id === selectedProduct.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === selectedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...selectedProduct, quantity: 1 }]);
    }
  };

  return (
    <div className="luster-page">

      <div className="luster-product">

       
        <div className="luster-gallery">

         
          <div className="luster-main-image">
            <img
              src={mainImage}
              alt={imageNames[selectedImageIndex]}
            />
          </div>

          
          <div className="luster-thumbnails">

            {images.map((image, index) => (
              <button
                key={index}
                className="luster-thumbnail"
                onClick={() => {
                  setMainImage(image);
                  setSelectedImageIndex(index);
                }}
              >
                <img
                  src={image}
                  alt={imageNames[index]}
                />
                <span>{productPrices[index].toLocaleString()} DA</span>
              </button>
            ))}

          </div>

        </div>

       
        <div className="luster-info">

          <span>
            Q LIGHT COLLECTION
          </span>

          <h1>
            Luster LED
          </h1>

          <div className="gold-line"></div>

          <p>
            Modern luxury LED lighting designed
            for elegant and beautiful spaces.
          </p>

          <h2>{selectedPrice.toLocaleString()} DA</h2>

          <button className="add-cart-luster" onClick={addToCart}>
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default LusterLED;
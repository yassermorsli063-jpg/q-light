import React from 'react';
import './toppruduct.css';
import premiumLamp from '../assets/lustreled.jpg';
import classicLamp from '../assets/luster.jpg';
import lusterled from '../assets/lusterled.jpg';
import prmiumlustreled from '../assets/lustere.jpg';
import coronaLamp from '../assets/corona.jpg';
import lustercrestal from '../assets/crystal.jpg';
import lustercrestalmagic from '../assets/luster magic.jpg';
import crystalLamp from '../assets/images (6).jpg';
import aplik from '../assets/images (12).jpg';
import aplikled from '../assets/images (13).jpg';
import aplik2led from '../assets/images (14).jpg';
import aplikledlump from '../assets/images (15).jpg';


const topProducts = [
  {
    id: 1,
    badge: 'Premium',
    title: 'Luxury LED Lamp',
    description: 'Elegant LED lighting with refined finishes and soft glow for upscale interiors.',
    price: 'DA 12,500',
    image: premiumLamp,
  },
  {
    id: 2,
    badge: 'Best seller',
    title: 'Classic Chandeliers',
    description: 'Classic chandelier designs with glowing warmth that transform large rooms.',
    price: 'DA 9,800',
    image: classicLamp,
  },
  {
    id: 3,
    badge: 'New arrival',
    title: 'Crystal Halo Lamp',
    description: 'Sparkling crystal details and polished metal create a luxury statement piece.',
    price: 'DA 13,200',
    image: lusterled,
  },
  {
    id: 4,
    badge: 'Featured',
    title: 'Premium Bedside LED',
    description: 'Modern design with premium materials for an elegant desk or bedside display.',
    price: 'DA 10,400',
    image: prmiumlustreled,
  },
  {
    id: 5,
    badge: 'Limited Edition',
    title: 'Corona Lamp',
    description: 'Modern design with premium materials for an elegant desk or bedside display.',
    price: 'DA 10,400',
    image: coronaLamp,
  },
{
    id: 6,
    badge: 'Limited Edition',
    title: 'Crystal Pendant Light',
    description: 'Modern design with premium materials for an elegant desk or bedside display.',
    price: 'DA 10,400',
    image: lustercrestal,
},

{
  id: 7,
  badge: 'Limited Edition',
  title: 'Magic Crystal Luster',
  description: 'A magical lighting solution that adds a touch of wonder to any space.',
  price: 'DA 15,000',
  image: lustercrestalmagic,
},
{
  id: 8,
  badge: 'Limited Edition',
  title: 'Crystal Lamp',
  description: 'A crystal-inspired lamp that brings elegance and sparkle to your home.',
  price: 'DA 14,500',
  image: crystalLamp,
},
{
id: 9,
  badge: 'Limited Edition',
  title: 'Aplik Lamp',
  description: 'A modern lamp that brings a touch of elegance to any space.',
  price: 'DA 12,000',
  image: aplik,
},

{
  id: 10,
  badge: 'Limited Edition',
  title: 'Aplique Glow LED',
  description: 'A magical lighting solution that adds a touch of wonder to any space.',
  price: 'DA 15,000',
  image: aplikled,
},
{
  id: 11,
  badge: 'Limited Edition',
  title: 'Aplique Nova LED',
  description: 'A modern LED solution that adds a touch of elegance to any space.',
  price: 'DA 14,000',
  image: aplik2led,
},
{
  id: 12,
  badge: 'Limited Edition',
  title: 'Aplique Studio Lamp',
  description: 'A modern LED solution that adds a touch of elegance to any space.',
  price: 'DA 13,500',
  image: aplikledlump,
},
];

function TopProduct() {
  return (
    <section className="top-product">
      <div className="top-product-header">
        <div>
          <p className="top-product-badge-main">Top products</p>
          <h2 className="top-product-heading">Premium lighting favorites</h2>
        </div>
      </div>

      <div className="top-product-grid">
        {topProducts.map((product) => (
          <article className="top-product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="top-product-image" />
            <div className="top-product-details">
              <p className="top-product-card-badge">{product.badge}</p>
              <h3 className="top-product-title">{product.title}</h3>
              <p className="top-product-description">{product.description}</p>
              <div className="top-product-meta">
                <span className="top-product-price">{product.price}</span>
                <button className="top-product-button" type="button">Shop now</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TopProduct;

       
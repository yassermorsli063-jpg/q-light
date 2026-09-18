import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

import luster from "../assets/luster magic.jpg";
import aplique from "../assets/images (15).jpg";
import lusterled from "../assets/lusterled.jpg";

const categories = [
  {
    id: "smart-lighting",
    title: "Luster LED",
    description:
      "App-controlled lamps, bulbs, and mood lighting for modern spaces.",
    link: "/luster-led",
    image: lusterled,
  },

  {
    id: "ambient-lights",
    title: "Aplique",
    description:
      "Soft glow fixtures and decorative lights to set the mood.",
    link: "/aplique",
    image: aplique,
  },

  {
    id: "decorative",
    title: "Luster Crystal",
    description:
      "Premium designer lamps and accent pieces for every room.",
    link: "/luster-crystal",
    image: luster,
  },

];

function Categories() {
  return (
    <div className="categories-page">

      

      <div className="categories-header">

        <div>
          <span className="categories-label">
            Q LIGHT COLLECTION
          </span>

          <h1>
            Explore Categories
          </h1>

          <p>
            Discover premium lighting collections designed
            for elegance, comfort, and smart control.
          </p>
        </div>

      </div>


      {/* CATEGORIES */}

      <div className="categories-grid">

        {categories.map((category) => (

          <article
            className="category-card"
            key={category.id}
          >

            {/* IMAGE */}

            <div className="category-image-wrap">

              <img
                className="category-image"
                src={category.image}
                alt={category.title}
              />

            </div>


            {/* CONTENT */}

            <div className="category-body">

              <div className="category-badge">
                {category.title}
              </div>

              <h2>
                {category.title}
              </h2>

              <p>
                {category.description}
              </p>


              {/* BUTTON */}

              <Link
                to={category.link}
                className="category-link"
              >
                Shop by {category.title}
              </Link>

            </div>

          </article>

        ))}

      </div>

    </div>
  );
}

export default Categories;
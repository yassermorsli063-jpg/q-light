import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import products from "./data";
import "./Search.css";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() || "";
  const normalizedQuery = query.toLowerCase();

  const results = products.filter((product) =>
    [
      product.title,
      product.description,
      product.category,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery)
  );

  return (
    <main className="search-page">
      <div className="search-page-header">
        <span>Q LIGHT COLLECTION</span>

        <h1>
          {query
            ? `Search results for "${query}"`
            : "Search products"}
        </h1>

        <p>
          {results.length} product
          {results.length === 1 ? "" : "s"} found
        </p>
      </div>

      {results.length > 0 ? (
        <div className="search-results">
          {results.map((product) => (
            <article
              className="search-result-card"
              key={product.id}
            >
              <img
                src={product.image}
                alt={product.title}
              />

              <div>
                <span>{product.category}</span>

                <h2>{product.title}</h2>

                <p>{product.description}</p>

                <p>{product.price} DA</p>

                <Link to={product.path || `/store/${product.id}`}>
                  View product
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="search-empty">
          No products found.
        </p>
      )}
    </main>
  );
}

export default Search;
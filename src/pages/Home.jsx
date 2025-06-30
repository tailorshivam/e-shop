import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import "../styles/home.css";
import "../styles/productList.css"

function Home() {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products
    .filter((p) =>
      category === "All" ? true : p.category === category
    )
    .filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "priceLow") return a.price - b.price;
      if (sortOrder === "priceHigh") return b.price - a.price;
      if (sortOrder === "nameAZ") return a.title.localeCompare(b.title);
      if (sortOrder === "nameZA") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <div className="home-page container py-5">
      <h2 className="text-center fw-bold mb-4">🛍️ Explore Our Products</h2>

      <div className="row mb-4 g-3 align-items-center justify-content-center text-center">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-auto">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="col-auto">
          <select
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Sort</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="nameAZ">Name: A-Z</option>
            <option value="nameZA">Name: Z-A</option>
          </select>
        </div>
      </div>

      <div className="row g-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
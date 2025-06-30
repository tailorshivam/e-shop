import React, { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products.json";
import "../styles/productList.css";

function ProductList() {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const allCategories = ["All", ...new Set(products.map((p) => p.category))];

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

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">🛍️ Browse Products</h2>

      <div className="row mb-4 g-3 align-items-center justify-content-center text-center">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="🔎 Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <select
            className="form-select"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            {allCategories.map((cat, index) => (
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
        {paginatedProducts.length === 0 ? (
          <p className="text-center">No products found.</p>
        ) : (
          paginatedProducts.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination-controls d-flex justify-content-center mt-5">
          <ul className="pagination">
            {[...Array(totalPages)].map((_, i) => (
              <li
                className={`page-item ₹{currentPage === i + 1 ? "active" : ""}`}
                key={i}
              >
                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductList;
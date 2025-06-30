import React from "react";
import ProductList from "../components/ProductList";
import products from "../data/products.json";

function Products() {
  return (
    <div>
      <h2 className="mb-4">All Products</h2>
      <ProductList products={products} />
    </div>
  );
}

export default Products;
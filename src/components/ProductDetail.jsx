import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="row">
      <div className="col-md-5">
        <img src={product.image} className="img-fluid" alt={product.title} />
      </div>
      <div className="col-md-7">
        <h2>{product.title}</h2>
        <p className="text-muted">{product.category}</p>
        <p>{product.description}</p>
        <h4>${product.price}</h4>
        <button className="btn btn-primary me-2" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <button className="btn btn-outline-danger">♡ Wishlist</button>
      </div>
    </div>
  );
}

export default ProductDetail;
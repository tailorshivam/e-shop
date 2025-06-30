import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";
import "../styles/productCard.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="card product-card shadow-sm h-100 border-0"
      onClick={goToDetail}
      style={{ cursor: "pointer" }}
    >
      <img src={product.image} className="card-img-top product-img" alt={product.title} />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted small mb-3">
          {product.description.slice(0, 60)}...
        </p>
        <div className="mt-auto d-flex justify-content-between">
          <span className="text-primary fw-bold">₹{product.price}</span>
          <div>
            <button
              className="btn btn-sm btn-outline-primary me-2"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click
                addToCart(product);
              }}
            >
              🛒
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click
                addToWishlist(product);
              }}
            >
              ❤️
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ProductCard;
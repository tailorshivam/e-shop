import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import "../styles/productDetail.css"; // Optional custom styles

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center p-5">Product not found.</div>;
  }

  return (
    <div className="product-detail-wrapper d-flex flex-column min-vh-100">
      <div className="container py-5 flex-grow-1">
        <div className="row align-items-center">
          <div className="col-md-5">
            <img src={product.image} className="img-fluid rounded" alt={product.title} />
          </div>
          <div className="col-md-7">
            <h2 className="fw-bold">{product.title}</h2>
            <p className="text-muted">{product.category}</p>
            <p>{product.description}</p>
            <h4 className="text-success">₹{product.price}</h4>
            <div className="d-flex gap-2 mt-3">
              <button
                className="btn btn-primary"
                onClick={() => addToCart(product)}
              >
                🛒 Add to Cart
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => addToWishlist(product)}
              >
                ❤️ Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
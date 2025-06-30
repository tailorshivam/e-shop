import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import "../styles/wishlist.css";

function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist-page container py-5">
      <h2 className="text-center fw-bold mb-4">❤️ Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <div className="alert alert-info text-center">
          Your wishlist is empty. <Link to="/">Browse products</Link>
        </div>
      ) : (
        <div className="row g-4">
          {wishlistItems.map((item) => (
            <div className="col-12 col-md-6" key={item.id}>
              <div className="card shadow-sm wishlist-card h-100">
                <div className="row g-0">
                  <div className="col-4">
                    <img src={item.image} className="img-fluid rounded-start wishlist-img" alt={item.title} />
                  </div>
                  <div className="col-8">
                    <div className="card-body d-flex flex-column h-100">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text text-muted small mb-2">
                        {item.description.slice(0, 50)}...
                      </p>
                      <p className="card-text fw-bold mb-2">Price: ₹{item.price.toFixed(2)}</p>
                      <div className="mt-auto d-flex justify-content-end">
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => removeFromWishlist(item.id)}
                        >
                          Remove ❤️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
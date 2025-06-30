import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/cart.css";

function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page container py-5">
      <h2 className="text-center fw-bold mb-4">🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-warning text-center">
          Your cart is empty. <Link to="/">Start shopping</Link>
        </div>
      ) : (
        <>
          <div className="row g-4">
            {cartItems.map((item) => (
              <div className="col-12 col-md-6" key={item.id}>
                <div className="card cart-card shadow-sm h-100">
                  <div className="row g-0">
                    <div className="col-4">
                      <img src={item.image} alt={item.title} className="img-fluid rounded-start cart-img" />
                    </div>
                    <div className="col-8">
                      <div className="card-body d-flex flex-column h-100">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text text-muted small mb-2">Qty: {item.qty}</p>
                        <p className="card-text fw-bold mb-2">Price: ₹{item.price.toFixed(2)}</p>
                        <p className="card-text text-primary fw-semibold">
                          Subtotal: ₹{(item.qty * item.price).toFixed(2)}
                        </p>
                        <div className="mt-auto">
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center mt-5">
            <h4 className="fw-bold">Total: ₹{total.toFixed(2)}</h4>
            <div>
              <button className="btn btn-danger me-2" onClick={clearCart}>
                Clear Cart
              </button>
              <Link to="/checkout" className="btn btn-success">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
//import "../styles/checkout.css";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

   const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();

    // Optional: redirect to home after few seconds
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (submitted) {
    return <h3 className="text-success">🎉 Order Placed Successfully! Redirecting...</h3>;
  }

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input required className="form-control" />
        </div>
        <div className="mb-3">
          <label>Shipping Address</label>
          <input required className="form-control" />
        </div>
        <div className="mb-3">
          <label>Payment Method</label>
          <select className="form-control" required>
            <option value="">Select</option>
            <option>Credit Card</option>
            <option>Cash on Delivery</option>
            <option>UPI</option>
          </select>
        </div>

        <h5>Total: ${total.toFixed(2)}</h5>
        <button className="btn btn-success mt-3">Confirm Order</button>
      </form>
    </div>
  );
}

export default Checkout;
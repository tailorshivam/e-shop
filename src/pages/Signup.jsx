import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
//import "../styles/signup.css"; // optional styling file

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate("/");
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div className="signup-wrapper d-flex flex-column justify-content-center align-items-center">
      <div className="signup-box shadow-lg p-4 bg-white rounded" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4 text-success fw-bold">Create Your Account 🚀</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create a secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-success w-100 mb-2" type="submit">
            Sign Up
          </button>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login" className="fw-bold text-decoration-none">Login here</Link>
          </p>
        </form>
      </div>

      <footer className="mt-auto text-center pt-4 small text-muted">
        © {new Date().getFullYear()} ShivamShop. All rights reserved.
      </footer>
    </div>
  );
}

export default Signup;
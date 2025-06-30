import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/login.css"; // Optional custom styles

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, googleLogin } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/");
        } catch (error) {
            alert("Login failed: " + error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            navigate("/");
        } catch (error) {
            alert("Google login failed: " + error.message);
        }
    };

    return (
        <div className="login-wrapper d-flex flex-column justify-content-center align-items-center">
            <div className="login-box shadow-lg p-4 bg-white rounded" style={{ width: "100%", maxWidth: "400px" }}>
                <h2 className="text-center mb-4 text-primary fw-bold">Welcome Back 👋</h2>
                <form onSubmit={handleLogin}>
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
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="btn btn-primary w-100 mb-3" type="submit">
                        Login
                    </button>
                    <button className="btn btn-outline-danger w-100" type="button" onClick={handleGoogleLogin}>
                        <i className="bi bi-google me-2"></i> Continue with Google
                    </button>
                </form>
                <p className="mt-3 text-center">
                    Don't have an account? <Link to="/signup" className="text-decoration-none fw-bold">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
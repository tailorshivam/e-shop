import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

function Header() {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
            <div className="container">
                <Link className="navbar-brand text-primary fw-bold fs-4" to="/">
                    🛍️ E-Shop
                </Link>

                {/* Toggle Button for Mobile View */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <div className="navbar-nav align-items-center gap-2 text-center text-lg-start">
                        {/* <Link to="/products" className="btn btn-outline-dark me-2">
                            All Products
                        </Link> */}
                        <Link to="/wishlist" className="btn btn-outline-danger me-2">
                            ❤️ Wishlist
                        </Link>
                        <Link to="/cart" className="btn btn-outline-primary me-2">
                            🛒 Cart
                        </Link>

                        {/* {user ? (
                            <div className="dropdown">
                                <button
                                    className="btn btn-outline-dark dropdown-toggle d-flex align-items-center"
                                    type="button"
                                    id="userDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <FaUserCircle className="me-2" size={20} />
                                    <span className="d-none d-md-inline">{user.email.split("@")[0]}</span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                    <li>
                                        <button className="dropdown-item" onClick={logout}>
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/login" className="btn btn-outline-dark">
                                Login
                            </Link>
                        )} */}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
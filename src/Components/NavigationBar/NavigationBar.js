import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
            <div className="container">
                <div className="navbar-collapse">
                    <span className="navbar-brand text-white">Weather App <i className="bi bi-clouds-fill"></i></span>
                </div>
                <div className="d-flex align-items-center">
                    <Link className="nav-link text-white m-2" to="/">Home <i className="bi bi-house-fill"></i></Link>
                    <Link className="nav-link text-white m-2" to="/Weather">Weather <i className="bi bi-cloudy-fill"></i></Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
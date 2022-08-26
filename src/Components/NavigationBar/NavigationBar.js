import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
            <div class="container">
                <div className="navbar-collapse">
                    <span className="navbar-brand text-white">Weather App <i className="bi bi-clouds-fill"></i></span>
                </div>
                <div className="d-flex align-items-center">
                    <a className="nav-link text-white m-2" href="https://www.google.com/">Home <i className="bi bi-house-fill"></i></a>
                    <a className="nav-link text-white m-2" href="https://www.google.com/">Weather <i className="bi bi-cloudy-fill"></i></a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
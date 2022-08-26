import React from "react";

const Home = () => {
    return (
        <div
            className="d-flex justify-content-center align-items-center content-container flex-column"
            style={{ height: "500px" }}
        >
            <div className="d-flex align-items-center">
                <h1 className="me-2">AR Tech</h1>
                <i className="bi bi-cloud-haze2-fill" style={{ "font-size": "40px" }}></i>
            </div>
            <div>
                <p>Free Weather App</p>
            </div>
        </div >
    )
}

export default Home;
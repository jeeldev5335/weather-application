import React from "react";

const Search = () => {
    return (
        <div className="row justify-content-md-center">
            <div className="col col-lg-5">
                <div className="form-group">
                    <label htmlFor="city">Type City Name</label>
                    <span className="ms-3">
                        ( Get Your Current Location
                        <button className="btn btn-link">
                            <i className="bi bi-pin-map-fill"></i>
                        </button>
                        )
                    </span>
                    <input className="form-control" name="city" id="city" />
                </div>
            </div>
            {/* <div className="col col-lg-1 text-center">
                <label htmlFor="or"></label>
                <h5 id="or" name="or">OR</h5>
            </div>
            <div className="col col-lg-5">
                <div className="form-group text-center">
                    <label htmlFor="location">Current Location</label>
                    <div>
                        <button className="btn btn-sm btn-primary bi bi-pin-map-fill" name="location" id="location"></button>
                    </div>
                </div>
            </div> */}
            <div className="col col-lg-1 text-end">
                <label className="pb-2 mb-1" htmlFor="search">Search</label>
                <button className="btn btn-primary bi bi-search" name="search" id="search"></button>
            </div>
        </div>
    )
}

export default Search;
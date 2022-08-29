import React, { useEffect, useState } from "react";
import { allowOnlyAlphabets } from '../../Utils';
import UserServices from "../Services/UserServices";

const Search = (props) => {

    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const handleAlphabets = (event) => allowOnlyAlphabets(event);

    const handleChange = (event) => {
        setData((preData) => {
            return { ...preData, [event.target.name]: event.target.value }
        });

        // props.handleDataChange();
    };

    const searchCity = () => {
        const obj = new UserServices();

        obj.usingCityName(data.city)
            .then((result) => {
                console.log('city api result', result);
                setData((preData) => {
                    return { ...preData, lat: result.data.coord.lat, lon: result.data.coord.lon }
                })
            }).catch((error) => {
                console.log('city api error', error);
                setErrors({ cityError: error.response.data.message })
            })
    }

    useEffect(() => {
        props.handleDataChange(data);
    },[data.lat, data.lon])

    return (
        <div className="row justify-content-md-center">
            <div className="col col-lg-5">
                <div className="form-group">
                    <label className="pb-2" htmlFor="city">Type City Name</label>
                    {/* <span className="ms-3">
                        ( Get Your Current Location
                        <button className="btn btn-link">
                            <i className="bi bi-pin-map-fill"></i>
                        </button>
                        )
                    </span> */}
                    <input className="form-control" name="city" id="city" onKeyDown={handleAlphabets} onChange={handleChange} />
                    {errors.cityError && <div className="text-danger">{errors.cityError}</div>}
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
                <label className="pb-2" htmlFor="search">Search</label>
                <button className="btn btn-primary bi bi-search" name="search" id="search" onClick={searchCity}></button>
            </div>
        </div>
    )
}

export default Search;
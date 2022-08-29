import React, { createContext, useEffect, useState } from "react";
import Result from "./Result";
import Search from "./Search";

export const userContext = createContext();

const Weather = () => {

    const [data, setData] = useState({});

    const handleDataChange = (data) => {
        setData(data);
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (Result) => {
                    const { latitude, longitude } = Result.coords;
                    setData({ 'lat': latitude, 'lon': longitude });
                }, (error) => {
                    console.log(error);
                }
            );
        } else {
            console.log("Geolocation Does Not supported.")
        }
    }, []);
    
    return (
        <userContext.Provider value={data}>
            <div className="container pt-5">
                <Search handleDataChange={handleDataChange} />
                {Object.keys(data).length !== 0 && <Result />}
            </div>
        </userContext.Provider>
    )
}

export default Weather;
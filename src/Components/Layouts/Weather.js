import React, { useEffect } from "react";
import Result from "./Result";
import Search from "./Search";

const Weather = () => {

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (Result) => {
                    console.log(Result);
                }, (error) => {
                    console.log(error);
                }
            );
        } else {
            console.log("Geolocation Does Not supported.")
        }
    }, []);

    return (
        <div className="container pt-5">
            <Search />
            <Result />
        </div>
    )
}

export default Weather;
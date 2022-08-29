import React, { useContext, useEffect, useState } from "react";
import UserServices from "../Services/UserServices";
import { userContext } from "./Weather";

const Result = () => {
    const CurrentPosition = useContext(userContext);
    const [data, setData] = useState({});

    useEffect(() => {
        const obj = new UserServices();

        console.log("Result load");

        obj.usingCoordinates(CurrentPosition.lat, CurrentPosition.lon)
            .then((result) => {
                setData({
                    city: result.data.name,
                    temp: result.data.main.temp,
                    description: result.data.weather[0].description,
                    icon: result.data.weather[0].icon,
                    feelsLike: result.data.main.feels_like,
                    minTemp: result.data.main.temp_min,
                    maxTemp: result.data.main.temp_max,
                    sunrise: result.data.sys.sunrise,
                    sunset: result.data.sys.sunset,
                });
            }).catch((error) => {
                console.log(error);
            })
    }, [CurrentPosition]);

    const kelTocel = (K) => {
        return (K - 273.15).toFixed(2) + "°C";
    }

    const getTheDate = (stamp) => {
        const date = new Date(stamp*1000);
        return date.toLocaleTimeString('en-US');
    }

    return (
        <div className="row justify-content-md-center mt-4">
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="icon" />
                            {data.city} ( {kelTocel(data.temp)} )<span>{data.description}</span>
                        </h4>
                        <div className="row">
                            <div className="col">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th>Feels like</th>
                                            <td>{kelTocel(data.feelsLike)}</td>
                                        </tr>
                                        <tr>
                                            <th>Min Temp.</th>
                                            <td>{kelTocel(data.minTemp)}</td>
                                        </tr>
                                        <tr>
                                            <th>Max Temp.</th>
                                            <td>{kelTocel(data.maxTemp)}</td>
                                        </tr>
                                        <tr>
                                            <th>Sun Rise</th>
                                            <td>{getTheDate(data.sunrise)}</td>
                                        </tr>
                                        <tr>
                                            <th>Sun Set</th>
                                            <td>{getTheDate(data.sunset)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result;
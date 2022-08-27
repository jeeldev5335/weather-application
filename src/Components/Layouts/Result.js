import React from "react";

const Result = () => {
    return (
        <div className="row justify-content-md-center mt-4">
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src="" alt="" />
                            City Name ( temp. )<span>Description</span>
                        </h4>
                        <div className="row">
                            <div className="col">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th>Feels like</th>
                                            <td>temp</td>
                                        </tr>
                                        <tr>
                                            <th>Min Temp.</th>
                                            <td>min temp</td>
                                        </tr>
                                        <tr>
                                            <th>Max Temp.</th>
                                            <td>max temp</td>
                                        </tr>
                                        <tr>
                                            <th>Sun Rise</th>
                                            <td>sun rise</td>
                                        </tr>
                                        <tr>
                                            <th>Sun Set</th>
                                            <td>sun set</td>
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
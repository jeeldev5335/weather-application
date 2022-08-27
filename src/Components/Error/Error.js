import React from "react";
import pic from "../../images/Error-img-3.jpg";
import {Link} from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="text-center">
                <img src={pic} alt="404 Error" className="imgError" />
            </div>
            <div className="text-center">
                <Link to="/" className="btn btn-primary">Back</Link>
            </div>
        </div>
    );
}

export default Error;
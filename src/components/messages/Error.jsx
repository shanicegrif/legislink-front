import React from 'react';
import "./Error.css"

const Error = () => {
    return (
        <div className="error-container">
            <h1 className="error-heading">Oops! Something went wrong.</h1>
            <p className="error-message">We're sorry, but an error occurred while processing your request.</p>
        </div>
    );
}

export default Error;

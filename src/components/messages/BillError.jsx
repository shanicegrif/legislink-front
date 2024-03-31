import React from 'react';

const BillError = () => {
    return (
        <div className="error-container">
            <h1 className="error-heading">Oops! Something went wrong.</h1>
            <p className="error-message">We're sorry, but there are no bills for this selection.</p>
        </div>
    );
}

export default BillError;

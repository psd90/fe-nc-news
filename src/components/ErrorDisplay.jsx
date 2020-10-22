import React from 'react';

const ErrorDisplay = (props) => {
    return (
        <div>
            <p>
                ERROR ( Code : {props.status}, {props.message})
            </p>
        </div>
    )
}

export default ErrorDisplay
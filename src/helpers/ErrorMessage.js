import React from 'react';

const ErrorMessage = (props) => {
    const { error } = props
    if (error.valid) {
        return null;
    }

    return (
        <small className='text-danger ms-2'>
            {error.message}
        </small>
    );
};

export default ErrorMessage;

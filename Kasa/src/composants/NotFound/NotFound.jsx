import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to the home page after 3 seconds
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, [navigate]);

    return (
        <div>
            <h1>Page Not Found</h1>
            <p>Redirecting to home page...</p>
        </div>
    );
};

export default NotFound;
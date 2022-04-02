import { Button } from 'react-bootstrap';
import React from 'react';
import "./PageNotFound.css";
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='notFoundContainer'>
            <div className="notFound">
                <h1>404</h1>
                <h3>OPPS! Page Not Found</h3>
                <Button variant="primary" onClick={() => navigate("/")}>Back To Home</Button>
            </div>
        </div>
    );
};

export default PageNotFound;
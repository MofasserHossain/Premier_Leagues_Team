import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className=" error">
      <h1>404 Page</h1>
      <p>Page Not Found</p>
      <Link to="/">
        <Button variant="primary" className="backToHome">
          Back To Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;

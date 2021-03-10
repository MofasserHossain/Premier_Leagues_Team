import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Logo.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar fixed="top" className="shadow" bg="white " variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/all-teams">All Teams</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/log-in">Log In</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

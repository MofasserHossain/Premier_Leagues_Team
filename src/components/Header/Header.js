import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Logo.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        fixed="top"
        className="shadow"
        bg="white "
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/all-teams">All Teams</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/log-in">Log In</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

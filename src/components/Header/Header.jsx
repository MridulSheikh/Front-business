import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div sticky="top" className='bg-light'>
        <Navbar collapseOnSelect expand="lg"  variant="light">
        <Container>
        <div>
        <span  className=''>Mridul sheikh</span>
        <br />
        <span >Uid: 1236596897654</span>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Link as={NavLink} to="/">Features</Nav.Link>
            <Nav.Link as={NavLink} to="/">Pricing</Nav.Link>
          </Nav>
          <Nav className="text-center">
            <Nav.Link as={NavLink} to="/">More deets</Nav.Link>
            <Nav.Link as={NavLink} to="/">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;
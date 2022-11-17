import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';

import './nav-bar.scss';

const MyNavbar = ({ user }) => {
  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  };

  return (
    <Navbar sticky="top" expand="lg" className="navbar w-12 pb-2">
      <Container fluid className="px-md-5">
        <Navbar.Brand href="/">myFlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href={`/profile`}>Profile</Nav.Link>
            <Nav.Link onClick={() => onLoggedOut()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

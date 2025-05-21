// src/Components/NavigationBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">🎭 Club Events</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/events" className="nav-link">Events</NavLink>
            <NavLink to="/add-event" className="nav-link text-success">➕ Add Event</NavLink>
            <NavLink to="/users" className="nav-link">UsersCRUD</NavLink>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

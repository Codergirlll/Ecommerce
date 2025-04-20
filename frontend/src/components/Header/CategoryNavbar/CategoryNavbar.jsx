import React from 'react';
import { Container, Dropdown, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './CategoryNavbar.css';

const CategoryNavbar = () => {
  return (
    <div className="category-navbar shadow-sm">
      <Container className="d-flex align-items-center justify-content-start py-2">
        {/* All Categories Dropdown */}
        <Dropdown>
          <Dropdown.Toggle className="category-dropdown-btn" id="dropdown-basic">
            <FaBars className="me-2" /> All Categories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/fashion">Fashion</Dropdown.Item>
            <Dropdown.Item href="#/electronics">Electronics</Dropdown.Item>
            <Dropdown.Item href="#/grocery">Grocery</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Main Nav Links */}
        <Nav className="ms-4 category-nav">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Fashion</Nav.Link>
          <Nav.Link href="#">Electronic</Nav.Link>
          <Nav.Link href="#">Bakery</Nav.Link>
          <Nav.Link href="#">Grocery</Nav.Link>
          <Nav.Link href="#">Mobiles</Nav.Link>
          <Nav.Link href="#">Blog</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Container>
    </div>
  );
};

export default CategoryNavbar;
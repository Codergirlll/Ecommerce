import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, InputGroup, Dropdown, Badge } from 'react-bootstrap';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import "./header.css";
import logo from "../../assets/images/main.png"

const Header = () => {
  return (
    <div>
    {/* COVID Notice */}
    <div className="covid-banner">
      Due to the COVID 19 epidemic, orders may be processed with a slight delay
    </div>
  
    <Navbar bg="light" expand="lg" className="py-3 shadow-sm">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            width="80"
            height="80"
            className="me-2"
          />

        </Navbar.Brand>
  
        {/* Location */}
        <Dropdown className="me-3 location-dropdown">
          <Dropdown.Toggle variant="outline-secondary" size="sm">
            India
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>India</Dropdown.Item>
            <Dropdown.Item>USA</Dropdown.Item>
            <Dropdown.Item>UK</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
  
        {/* Search */}
        <Form className="search-input me-3 flex-grow-1">
          <InputGroup>
            <FormControl type="text" placeholder="Search for products..." />
          </InputGroup>
        </Form>
  
        {/* Icons */}
        <Nav className="nav-icons align-items-center">
          <Nav.Link href="#"><FaUser size={20} /></Nav.Link>
          <Nav.Link href="#" className="cart-icon">
            <FaShoppingCart size={20} />
            <Badge bg="danger" pill className="cart-badge">
              1
            </Badge>
          </Nav.Link>
          <span className="fw-bold ms-2">$3.29</span>
        </Nav>
      </Container>
    </Navbar>
  </div>
  )
}

export default Header

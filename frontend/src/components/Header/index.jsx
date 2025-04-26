import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  InputGroup,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import "./header.css";
import logo from "../../assets/images/main.png";
import CategoryNavbar from "./CategoryNavbar/CategoryNavbar";
import CountryDropDown from "../CountryDropDown/CountryDropDown";

const Header = () => {
  return (
    <div className="">
      {/* COVID Notice */}

      <div className="covid-banner">
        Due to the COVID 19 epidemic, orders may be processed with a slight
        delay
      </div>
      <div className="container bg-light">
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

            {/* for country DropDown */}
            <CountryDropDown />

            {/* Search */}
            <Form className="search-input me-3 flex-grow-1">
              <InputGroup>
                <FormControl type="text" placeholder="Search for products..." />
              </InputGroup>
            </Form>

            {/* Icons */}
            <Nav className="nav-icons align-items-center">
              <Nav.Link href="#">
                <FaUser size={20} />
              </Nav.Link>
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
        <CategoryNavbar />
      </div>
    </div>
  );
};

export default Header;

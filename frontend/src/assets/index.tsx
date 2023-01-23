import * as React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./style.css";
import Techeer_Logo_Basic from "../../assets/images/Techeer_Logo_Basic.png";
import Techeer_Logo_Circle from "../../assets/images/Techeer_Logo_circle.png";

const Navibar = () => {
  return (
    <Navbar className="navbar-body" collapseOnSelect expand="lg" variant="dark">
      {/* <Navbar.Brand href="/">
        Techeer;
      </Navbar.Brand> */}
      <Navbar.Brand href="/">
        <img
          src={Techeer_Logo_Circle}
          height="40"
          className="d-inline-block align-top navbar-logo"
          alt="Techeer Logo"
        />{" "}
        <span className="navbar-title">Techeer</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto navbar-link">
          <Nav.Link href="/project">Projects</Nav.Link>
          <Nav.Link href="/member">Members</Nav.Link>
          {/* 보류 기능 */}
          {/* <Nav.Link href="/board">Board</Nav.Link> */}
        </Nav>
        <Nav>
          <NavDropdown title="Profile" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navibar;
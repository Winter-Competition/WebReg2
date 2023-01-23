import * as React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./style.css";
import uci_logo from "../../assets/images/uci_logo.png";

const Navibar = () => {
  return (
    <Navbar className="navbar-body" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/">
        <img
          src={uci_logo}
          height="40"
          className="d-inline-block align-top navbar-logo"
          alt="Techeer Logo"
        />{" "}
        <span className="navbar-title">UCI Home</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto navbar-link">
          <Nav.Link href="/soc">Schedule of Classes</Nav.Link>
          <Nav.Link href="/studentaccess">Student Access</Nav.Link>
          <Nav.Link href="/webreg">WebReg</Nav.Link>
          <Nav.Link href="/siteindex">Site Index</Nav.Link>
        </Nav>
        {/* <Nav>
          <NavDropdown title="Profile" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navibar;
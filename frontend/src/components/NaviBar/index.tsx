import * as React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./style.css";
import uci_logo from "../../assets/image/uci_logo.png";
import logout from "../../assets/image/logout.png";

const Navibar = () => {
  return (
    <Navbar className="navbar-body">
      <Navbar.Brand href="/">
        <img
          src={uci_logo}
          height="40"
          className="d-inline-block align-top navbar-logo"
          alt="UCI Logo"
        />{" "}
        <span className="navbar-title">UCI Home</span>
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto navbar-link">
          <Nav.Link href="/soc">Schedule of Classes</Nav.Link>
          <Nav.Link href="/studentaccess">Student Access</Nav.Link>
          <Nav.Link href="/webreg">WebReg</Nav.Link>
          <Nav.Link href="/siteindex">Site Index</Nav.Link>
          <Nav.Link href="/logout">
            <img src={logout} alt="logout" width={70}/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navibar;
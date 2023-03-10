import * as React from "react";
import { Navbar, Nav,Container} from "react-bootstrap";
import "./style.css";
import uci_logo from "../../assets/image/uci_logo.png";
import logout from "../../assets/image/logout.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import ClassCart from "../../components/Cart";

const Navibar = () => {
  return (
    <Navbar expand="md" className="navbar-body" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="/">
        <img
          src={uci_logo}
          height="40"
          className="d-inline-block navbar-logo"
          alt="UCI Logo"
        />UCI Registrar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
            style={{ maxHeight: '160px' }}
            navbarScroll
          >
            <Nav.Link href="/soc">Schedule of Classes</Nav.Link>
            <Nav.Link href="/studentaccess">Student Access</Nav.Link>
            <Nav.Link href="/webreg">WebReg</Nav.Link>
            <Nav.Link href="/checkout">Site Index</Nav.Link>
          </Nav>
          {/* this is the cart */}
          <ClassCart/>
          <Nav.Link href="/logout" className="test">
            <img src={logout} alt="logout_png" height={44}>
            </img>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
import * as React from "react";
import { Navbar, Nav,Container, Button } from "react-bootstrap";
import "./style.css";
import uci_logo from "../../assets/image/uci_logo.png";
import logout from "../../assets/image/logout.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Navibar = () => {
//   return (
//     <Navbar className="navbar-body" collapseOnSelect expand="lg" variant="dark">
//       <Container>
//       <Navbar.Brand href="/">
//         <img
//           src={uci_logo}
//           height="40"
//           className="d-inline-block align-top navbar-logo"
//           alt="UCI Logo"
//         />
//         <span className="navbar-title">UCI Home</span>
//       </Navbar.Brand>
//       <Navbar.Collapse id="responsive-navbar-nav me-auto">
//         <Nav className="me-auto navbar-link">
//           <Nav.Link href="/soc">Schedule of Classes</Nav.Link>
//           <Nav.Link href="/studentaccess">Student Access</Nav.Link>
//           <Nav.Link href="/webreg">WebReg</Nav.Link>
//           <Nav.Link href="/siteindex">Site Index</Nav.Link>
//           <Container className="navbar-logout">
//             <Nav.Link href="/logout">
//               <img src={logout} alt="logout" width={70}/>
//             </Nav.Link>
//           </Container>
//         </Nav>
//       </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
  return (
    <Navbar expand="lg" className="navbar-body" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="/">
        <img
          src={uci_logo}
          height="40"
          className="d-inline-block navbar-logo"
          alt="UCI Logo"
        />UCI Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/soc">Home</Nav.Link>
            <Nav.Link href="/studentaccess">Student Access</Nav.Link>
            <Nav.Link href="/webreg">WebReg</Nav.Link>
            <Nav.Link href="/index">Site Index</Nav.Link>
          </Nav>
           <Nav.Link href="/logout">
            <img src={logout} alt="logout_png">
            </img>
            </Nav.Link>
            {/* <Button variant="outline-dark btn-sm">Logout</Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
import * as React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logout from "../../assets/image/logout.png";

const ClassCart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        <img src={logout} alt="logout_logo"></img>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          This where cards should go
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ClassCart;
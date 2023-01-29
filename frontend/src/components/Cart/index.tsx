import * as React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import viewCart from "../../assets/image/viewCart.svg";
import CourseCards from "../Cards";

const ClassCart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" className="cart-button" onClick={handleShow}>
        <img src={viewCart} alt="logout_logo" width={105}></img>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" className="canvas-body">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h1 className="cart-title">
            Cart
          </h1>
          <CourseCards/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ClassCart;
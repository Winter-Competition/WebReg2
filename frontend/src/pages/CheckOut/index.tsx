import * as React from "react";
import RegisterForm from "../../components/Register";
// import ClassCart from "../../components/Cart";
import Calendar from "../../components/Calendar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";


export default function CheckOut() {
  return (
    <Row>
      <Col>
      <RegisterForm/>
      </Col>
      <Col xs={8}>
      <Calendar />
      </Col>
    </Row>
  );
}
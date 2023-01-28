import * as React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import calendar_logo from "../../assets/image/calendar_logo.svg";
import InputGroup from 'react-bootstrap/InputGroup';

const RegisterForm = () => {
  return (
    <Form className="register-body">
      <header className="header-body">
        <h3>Add To Study Cart
          <img src={calendar_logo} height="40" alt="calendar Logo" className="header-logo"/>
        </h3>
          <p>Click the desired course or 'Add to Cart' button below you would like to checkout. Must checkout cart in order to register officially</p>
      </header>
      <Form.Group className="mb-4" controlId="formTerm">
        <Form.Select defaultValue="Term: 2023 Winter Quarter" className="field-height">
            <option>Term: 2023 Winter Quarter</option>
            <option>Other Term 1</option>
            <option>Other Term 2</option>
          </Form.Select>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formGE">
        <Form.Select defaultValue="General Ed: Do not filter for General" className="field-height">
            <option>General Ed: Do not filter for General</option>
            <option>General Ed: 1</option>
            <option>General Ed: 2</option>
          </Form.Select>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formDept">
        <Form.Select defaultValue="Department" className="field-height">
            <option>Department</option>
            <option>AC ENG ......Academic English</option>
            <option>AFAM ......African American Studies</option>
          </Form.Select>
      </Form.Group>
      <InputGroup className="mb-4">
        <InputGroup.Text id="basic-addon1" className="field-height">Course Code</InputGroup.Text>
        <Form.Control placeholder="Ex. 35606" />
      </InputGroup>
      <InputGroup className="mb-4">
        <InputGroup.Text id="basic-addon1" className="field-height">Course Number</InputGroup.Text>
        <Form.Control placeholder="Ex: H2A, 5, 10-20" />
      </InputGroup>

      <Button variant="secondary" type="submit" className="button-1 mt-4 mb-4">
        Submit
      </Button>
      <Button variant="success" type="submit" className="button-2 mt-4 mb-4">
        Submit
      </Button>
      
    </Form>
  );
};

export default RegisterForm;
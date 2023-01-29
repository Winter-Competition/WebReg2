// import * as React from "react";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Table from 'react-bootstrap/Table'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import calendar_logo from "../../assets/image/calendar_logo.svg";
import double_arrow from "../../assets/image/down-arrow.png";
import InputGroup from 'react-bootstrap/InputGroup';

const RegisterForm = () => {
  const [open, setOpen] = useState(true);
  return (
  
          
        
    <Form className="register-body">
      <Collapse in={open}>
        <div className="register-body-collapse">
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
              <option>I&C SCI ......Information & Computer Science</option>
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

        <Button variant="secondary" className="button-1 mt-4 mb-4">
          Submit
        </Button>
        <Button variant="success" className="submit-button button-2 mt-4 mb-4" onClick={() => setOpen(!open)} aria-controls="collapse" aria-expanded={open}>
          Submit
        </Button>

        </div>
        
      </Collapse>
      <Collapse in={!open}>
        {/* <Button variant="secondary" className="button-1 mt-4 mb-4" onClick={() => setOpen(!open)} aria-controls="collapse" aria-expanded={open}>
          Back
        </Button> */}
        <div className=''>
          <div className='department-title-wrapper'>
            <header id='department-title'>
            Donald Bren School of Information and Computer Sciences
            </header>
          </div>
          
          <div className="collapsed-return-box" onClick={() => setOpen(!open)} aria-controls="collapse" aria-expanded={open} >
            <img id="doubleDown" src={double_arrow} ></img>
          </div>
          <div className='schedule-of-classes'>
          <Table className="soc" bordered hover>
              <thead>
                <tr className="course-title">
                  <td colSpan={4}>ICS31 - INTRO TO PROGRMMING</td>
                  
                </tr>
                <tr>
                  <td>Sec</td>
                  <td>Instructor</td>
                  <td>Time</td>
                  <td>Status</td>
                  
                </tr>
              </thead>
              <tbody>
                
                <tr>

                  <td>Lec A</td>
                  <td>ALFARO, S.</td>
                  <td>TuTh 11:00-12:20p</td>
                  
                  <td>

                    <OverlayTrigger
                      key="left"
                      placement="left"
                      overlay={
                        <Tooltip id={'tooltip-left'}>
                        <table className='status-hover'>
                          <tr>
                            <th>Max</th>
                            <th>Enr</th>
                            <th>WL</th>
                            <th>Req</th>
                          </tr>
                          <tr>
                            <td>292</td>
                            <td>292</td>
                            <td>0</td>
                            <td>803</td>
                          </tr>
                        </table>
                        </Tooltip>
                      }
                    >
                      <p style={{color:"black"}}>FULL</p>
                    </OverlayTrigger>
                        
                  </td>
                </tr>
                <tr>

                  <td>Lab A</td>
                  <td>STAFF</td>
                  <td>MWF 8:00- 9:20 </td>
                  <td>

                    <OverlayTrigger
                      key="left"
                      placement="left"
                      overlay={
                        <Tooltip id={'tooltip-left'}>
                        <table className='status-hover'>
                          <tr>
                            <th>Max</th>
                            <th>Enr</th>
                            <th>WL</th>
                            <th>Req</th>
                          </tr>
                          <tr>
                            <td>36</td>
                            <td>36</td>
                            <td>0</td>
                            <td>44</td>
                          </tr>
                        </table>
                        </Tooltip>
                      }
                    >
                      <p style={{color:"black"}}>FULL</p>
                    </OverlayTrigger>
                        
                  </td>
                </tr>
                <tr>

                  <td>Dis B</td>
                  <td>STAFF</td>
                  <td>MWF 7-7:50pm</td>
                  
                  <td>

                    <OverlayTrigger
                      key="left"
                      placement="left"
                      overlay={
                        <Tooltip id={'tooltip-left'}>
                        <table className='status-hover'>
                          <tr>
                            <th>Max</th>
                            <th>Enr</th>
                            <th>WL</th>
                            <th>Req</th>
                          </tr>
                          <tr>
                            <td>30</td>
                            <td>30</td>
                            <td>3</td>
                            <td>40</td>
                          </tr>
                        </table>
                        </Tooltip>
                      }
                    >
                      <p style={{color:"black"}}>FULL</p>
                    </OverlayTrigger>
                        
                  </td>
                </tr>
                  
              </tbody>
            </Table>
            <Table className="soc" bordered hover>
              <thead>
                <tr className="course-title">
                  <td colSpan={4}>ICS33 - INTERMEDIATE PRGRMG</td>
                  
                </tr>
                <tr>
                  <td>Sec</td>
                  <td>Instructor</td>
                  <td>Time</td>
                  <td>Status</td>
                  
                </tr>
              </thead>
              <tbody>
                
                <tr>

                  <td>Lec A</td>
                  <td>Thornton, A.</td>
                  <td>TuThu 2:00-3:20p</td>
                  
                  <td>

                    <OverlayTrigger
                      key="left"
                      placement="left"
                      overlay={
                        <Tooltip id={'tooltip-left'}>
                        <table className='status-hover'>
                          <tr>
                            <th>Max</th>
                            <th>Enr</th>
                            <th>WL</th>
                            <th>Req</th>
                          </tr>
                          <tr>
                            <td>200</td>
                            <td>52</td>
                            <td>0</td>
                            <td>159</td>
                          </tr>
                        </table>
                        </Tooltip>
                      }
                    >
                      <p style={{color:"green"}}>OPEN</p>
                    </OverlayTrigger>
                        
                  </td>
                </tr>
                <tr>

                  <td>Dis A</td>
                  <td>STAFF</td>
                  <td>MWF 6-6:50p</td>
                  
                  <td>

                    <OverlayTrigger
                      key="left"
                      placement="left"
                      overlay={
                        <Tooltip id={'tooltip-left'}>
                        <table className='status-hover'>
                          <tr>
                            <th>Max</th>
                            <th>Enr</th>
                            <th>WL</th>
                            <th>Req</th>
                          </tr>
                          <tr>
                            <td>30</td>
                            <td>16</td>
                            <td>0</td>
                            <td>18</td>
                          </tr>
                        </table>
                        </Tooltip>
                      }
                    >
                      <p style={{color:"green"}}>OPEN</p>
                    </OverlayTrigger>
                        
                  </td>
                </tr>
                <tr>

                  <td>Dis B</td>
                  <td>STAFF</td>
                  <td>MWF 7-7:50p</td>
                  
                  <td>

                    <OverlayTrigger
                      key="left"
                      placement="left"
                      overlay={
                        <Tooltip id={'tooltip-left'}>
                        <table className='status-hover'>
                          <tr>
                            <th>Max</th>
                            <th>Enr</th>
                            <th>WL</th>
                            <th>Req</th>
                          </tr>
                          <tr>
                            <td>30</td>
                            <td>30</td>
                            <td>3</td>
                            <td>40</td>
                          </tr>
                        </table>
                        </Tooltip>
                      }
                    >
                      <p style={{color:"red"}}>WL</p>
                    </OverlayTrigger>
                        
                  </td>
                </tr>
                  
              </tbody>
            </Table>



            
          </div>
        </div>
        
      </Collapse>
      
      
    </Form>
    
  );
};

export default RegisterForm;
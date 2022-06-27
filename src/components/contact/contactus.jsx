

  import React, { useState } from "react";
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import Form from 'react-bootstrap/Form';
  import Button from 'react-bootstrap/Button'
import { AddressMap } from "./map";
import StickyFooter from "../stickyfooter";
const Contact = () => {


return <>
<br></br>
<Container>
  <Row>
    <Col md="6"><img src='/images/contact.jpg' width="100%" height="auto" ></img></Col>
    <Col md="6"> 
    <h1>Contact Us at</h1>
    <Form>
    <Form.Group className="mb-3" controlId="fromBasicName">
    <Form.Label>Name *</Form.Label>
    <Form.Control type="text" placeholder="Name"  required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address *</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required/>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Label>Mobile *</Form.Label>
    <Form.Control type="text" placeholder="Enter Mobile Number" required />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3}  placeholder="Enter Your Message"/>
  </Form.Group>
  <Form.Group className="mb-3" >
  <Form.Text className="text-muted">
      We'll never share your email and Mobile Number with anyone else.
    </Form.Text>
    </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </Col>
  </Row>
  <br></br>
  <Row>
    <Col md='4'>
      <AddressMap />
    </Col>
    <Col md='8'>
<span style={{textDecoration:'underline'}}>Our Address</span>
<h1>Sidharth Sagar Function Hall & Hotel</h1>
<h6>Jalaun ByPass, Opposite to Muskan Hospital,</h6>
<h6> Jalaun Road, ORAI (Jalaun), ORAI - 285001,</h6>
<h6>Uttar Pradesh</h6>
<br></br>
<h6><span style={{textDecoration:'underline'}}>Contact Person:</span> Mr.Kamlesh Sagar</h6>
<h6><span style={{textDecoration:'underline'}}>Mobile:</span> +91 6394175022 </h6>
<h6><span style={{textDecoration:'underline'}}>Email:</span>  kaku8860@gmail.com</h6>
    </Col>
  </Row>
</Container>

<StickyFooter />
</>;
// 26.012908814108705, 79.4357267131439

};

export default Contact;
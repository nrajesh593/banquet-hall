import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { AiFillPhone } from "react-icons/ai";
const NB= () =>{
  return (
  <>
<>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/"><img src='/logo.jpg' height={'50px'}  width={'100px'} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="About">About Us</Nav.Link>
      <Nav.Link href="Gallery">Gallery</Nav.Link>
      <Nav.Link href="Contact">Contact Us</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="#"><AiFillPhone /> +91 6394175022</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>






  {/* <nav>
  <div className="navbar">
  <div className="logo" >
  
  <NavLink to="/" >
  <img src='/logo.jpg' height={'50px'}  width={'100px'} />
    </NavLink>
 </div>
      <ul className="nav-links">
    <li>
      <NavLink to="/" className={({ isActive }) => 
                      (isActive ? "lactive-class" : "not-active-class")}>Home</NavLink>
    </li>
    <li>
      <NavLink to="/About" className={({ isActive }) => 
                      (isActive ? "lactive-class" : "not-active-class")}>About Us</NavLink>
    </li>
    <li>
      <NavLink to="/Gallery" className={({ isActive }) => 
                      (isActive ? "lactive-class" : "not-active-class")}>Gallery</NavLink>
    </li>
    <li>
      <NavLink to="/Contact" className={({ isActive }) => 
                      (isActive ? "lactive-class" : "not-active-class")}>Contact Us</NavLink>
    </li>
    <li>
      <button><AiFillPhone /> +91 6394175022</button>
    </li></ul>
    </div>
    </nav> */}
    <Outlet />

  </>
  );
}
export default NB;
import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import Home from './home/home';
const Navbar= () =>{
  return (
  <>
  <nav>
  <div className="navbar">
  <div className="logo" >
  
  <NavLink to="/" >
  <span>Logo</span>
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
    </li></ul>
    </div>
    </nav>
    <Outlet />

  </>
  );
}
export default Navbar;
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const StickyFooter = () => {
  return (
    <MDBFooter color="blue" className="font-small mt-4" style={{backgroundColor:'rgba(16, 7, 7, 0.8)'}}>
      <MDBContainer fluid className="text-center text-md-left">
        <br></br>
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Thank You</h5>
            <p>
              Regards Sidharth Sagar Function Hall
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Quick Services</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Gallery</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact Us</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> N Rajesh </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default StickyFooter;
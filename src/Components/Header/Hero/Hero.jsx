import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <Row className="justify-content-between align-items-center">
        <Col lg={5}>
          <div className="left">
            <span>Hello I am</span>
            <h1>Tapajyoti Bose</h1>
            <h6>Product Developer</h6>
            <div className="social-links mt-4">
              <ul>
                <a
                  href="https://www.linkedin.com/in/tapajyoti-bose/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/ruppysuppy" target="_blank">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01c12e516ee1d35044"
                  target="_blank"
                >
                  <i class="fas fa-briefcase"></i>
                </a>
                <a href="https://dev.to/ruppysuppy" target="_blank">
                  <i class="fas fa-code"></i>
                </a>
                <a href="mailto:tapajyotibose2003@gmail.com">
                  <i class="fab fa-google"></i>
                </a>
              </ul>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="right">
            <img src="./profile.webp" className="img-fluid" />
          </div>
        </Col>
      </Row>
      <div className="text-center">
        {/* <button className="down">
          <i class="fa-solid fa-arrow-down"></i>
        </button> */}
      </div>
    </div>
  );
};


export default Hero;
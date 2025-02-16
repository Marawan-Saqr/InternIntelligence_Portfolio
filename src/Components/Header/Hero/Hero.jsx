import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Hero.css";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero" id="HOME">
      <Row className="justify-content-between align-items-center">
        <Col lg={5}>
          <motion.div className="left" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span>Hello I am</span>
            <h1>Tapajyoti Bose</h1>
            <h6>Product Developer</h6>
            <div className="social-links mt-4">
              <ul>
                <a
                  href="https://www.linkedin.com/in/tapajyoti-bose/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/ruppysuppy" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01c12e516ee1d35044"
                  target="_blank"
                >
                  <i className="fas fa-briefcase"></i>
                </a>
                <a href="https://dev.to/ruppysuppy" target="_blank">
                  <i className="fas fa-code"></i>
                </a>
                <a href="mailto:tapajyotibose2003@gmail.com">
                  <i className="fab fa-google"></i>
                </a>
              </ul>
            </div>
          </motion.div>
        </Col>
        <Col lg={4}>
          <motion.div className="right" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <img src="./profile.webp" className="img-fluid" />
          </motion.div>
        </Col>
      </Row>
      <div className="text-center">
        <button className="down">
          <a href="#EXPERIENCE"><i class="fa-solid fa-arrow-down"></i></a>
        </button>
      </div>
    </section>
  );
};


export default Hero;
import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="ABOUT">
      <h2 className="text-center">About</h2>
      <Row className="align-items-center">
        <Col lg={4}>
          <motion.div
            className="left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img src="./about.webp" className="img-fluid" />
          </motion.div>
        </Col>

        <Col lg={8}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <p>
              I am Tapajyoti Bose, a Top Rated Freelancer on Upwork. I am also
              an avid Open Source Contributor with contributions ranging from
              Huge Feature Additions to Tiny Fixes and Documentation Changes at
              several Large Organizations (like Microsoft, Amazon, Material UI,
              Numpy, Webhint, etc.) The Client Review below, which you will find
              in my Upwork reviews and others like it, describes the quality of
              work and value that you can expect from working with me: "Highly
              skilled frontend developer. I was continuously impressed with how
              quickly Tap could help turn a concept into working product. He'll
              be an asset on any project he works on and I'd happily work with
              him again."
            </p>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/tapajyoti-bose.appspot.com/o/Tapajyoti%20Bose.pdf?alt=media&token=24a70103-8fe6-4aa3-92dc-42ca11d95735"
              target="_blank"
            >
              View Resume
            </a>
          </motion.div>
        </Col>
      </Row>
    </section>
  );
};

export default About;

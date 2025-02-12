import React from "react";
import "./Contact.css";
import { Form } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2 className="text-center">Contact</h2>
        <p className="text-center">
          Have a question? Want to Collaborate? Just want to chat? <br /> Reach
          Out To Me
        </p>
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
        <p style={{ fontWeight: "bold" }} className="text-center mt-5">
          Send Me A Message
        </p>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Subject" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Message" />
          </Form.Group>
          <button className="btn btn-danger" style={{fontWeight: 'bold'}}>Submit</button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Testimonials.css';

const testimonialsData = [
  {
    quote: "Tap is an exceptional software engineer. He worked in my team for nearly a year, and consistently performed to an extremely high level. In particular his strengths are his attitude, speed to output, intellectual curiosity and ability to learn new things.",
    author: "Jack Symonds",
    position: "Client (Co-Founder/CEO at Lounge)"
  },
  {
    quote: "Tapajyoti was great and not only completed the job to the best of his ability but under the alotted time and budget! He was quick to communicate about issues and think on his feet. Great to work with!",
    author: "Tina Haibodi",
    position: "Client (Point of Contact, Element Finance)"
  },
  {
    quote: "Tapajyoti was great and not only completed the job to the best of his ability but under the alotted time and budget! He was quick to communicate about issues and think on his feet. Great to work with!",
    author: "Tina Haibodi",
    position: "Client (Point of Contact, Element Finance)"
  }
];

const Testimonials = () => {
  return (
    <Container className='testimonials' id="testimonials">
      <h2 className='text-center mb-4'>Testimonials</h2>
      <Carousel indicators={true} controls={true}>
        {testimonialsData.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className='testimonial-item text-center p-4'>
              <p style={{fontWeight: 'bold'}} className='quotes lead'>"{testimonial.quote}"</p>
              <h5 className='mt-3'>{testimonial.author}</h5>
              <p className='text-muted'>{testimonial.position}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;

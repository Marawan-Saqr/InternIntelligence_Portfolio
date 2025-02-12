import React, { useRef } from "react";
import { Row, Col } from "react-bootstrap";
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="project-card">
      <Row className={`align-items-center ${isEven ? "" : "flex-row-reverse"}`} style={{ marginTop: '90px', marginBottom: '90px' }}>
        <Col xs={7} lg={4}>
          <div 
            className="left" 
            ref={cardRef} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={() => {
              cardRef.current.style.setProperty("--mouse-x", `50%`);
              cardRef.current.style.setProperty("--mouse-y", `50%`);
            }}
          >
            <img src={project.img} className="img-fluid" alt={project.title} />
          </div>
        </Col>
        <Col lg={5}>
          <div className={`right ${isEven ? "" : "rtl-text"}`}>
            <h5>{project.title}</h5>
            <h6>{project.type}</h6>
            <p>{project.date}</p>
            <p className="special">{project.description}.</p>
            {project.link && (
              <a href={project.link} style={{ color: 'black' }} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-link"></i>
              </a>
            )}
            {project.github && (
              <a href={project.github} style={{ color: 'black', margin: "0px 5px" }} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectCard;

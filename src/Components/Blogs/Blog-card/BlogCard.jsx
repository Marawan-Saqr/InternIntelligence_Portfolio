import React from "react";
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
  return (
    <Col sm={6} lg={4} className="blog-card mt-4">
      <a style={{textDecoration: 'none'}} href={blog.link} target="_blank">
      <Card>
        <Card.Img variant="top" src={blog.img} />
        <Card.Body>
          <Card.Title style={{fontWeight: 'bold'}}>{blog.title}</Card.Title>
          <div style={{color: 'gray'}} className="date">{blog.date}</div>
          {/* Display skills as a list */}
          <div className="skills mt-2">
            <ul className="d-flex">
              {blog.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          {/* Like and Comments Section */}
          <div className="actions mt-3 d-flex justify-content-around align-items-center">
            <span><i class="fa-solid fa-heart" style={{color: 'red'}}></i> {blog.likes}</span>
            <span><i class="fa-solid fa-comment"></i> {blog.comments}</span>
          </div>
        </Card.Body>
      </Card>
      </a>
    </Col>
  );
};

export default BlogCard;
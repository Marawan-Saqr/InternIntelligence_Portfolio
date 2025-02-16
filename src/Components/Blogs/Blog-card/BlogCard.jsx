import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  return (
    <Col sm={6} lg={4} className="blog-card mt-4">
      <motion.a
        style={{ textDecoration: "none" }}
        href={blog.link}
        target="_blank"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card>
          <Card.Img variant="top" src={`../../../../public/blogs/${blog.img}`} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>{blog.title}</Card.Title>
            <div style={{ color: "gray" }} className="date">
              {blog.date}
            </div>

            <div className="skills mt-2">
              <ul className="d-flex">
                {blog.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="actions mt-3 d-flex justify-content-around align-items-center">
              <span>
                <i className="fa-solid fa-heart" style={{ color: "red" }}></i>{" "}
                {blog.likes}
              </span>
              <span>
                <i className="fa-solid fa-comment"></i> {blog.comments}
              </span>
            </div>
          </Card.Body>
        </Card>
      </motion.a>
    </Col>
  );
};

export default BlogCard;

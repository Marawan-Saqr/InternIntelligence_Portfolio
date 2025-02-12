import React from "react";
import "./Blogs.css";
import { blogsData } from "../../Data.js";
import { useState } from "react";
import BlogCard from "./Blog-card/BlogCard.jsx";
import { Row } from 'react-bootstrap';

const Blogs = () => {

  // Component State
  const [blogs] = useState(blogsData);


  return (
    <div className="blogs" id="Blogs">
      <h2 className="text-center">Blogs</h2>
      <Row>
        {blogs.length >= 1 ? (
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <h4 className="text-center mt-5 mb-5">No Blogs For Now</h4>
        )}
      </Row>
    </div>
  );
};


export default Blogs;
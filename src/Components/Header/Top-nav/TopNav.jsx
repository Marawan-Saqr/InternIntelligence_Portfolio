import { useState, useEffect } from "react";
import "./TopNav.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const TopNav = () => {
  // Component States
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="top-nav">
      <Navbar
        expand="lg"
        className={`top-nav-bar ${isScrolled ? "scrolled" : ""}`}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#">
            <img style={{ width: "40px" }} src="./logo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setShowSidebar(!showSidebar)} />
          <Navbar.Collapse id="navbarScroll">
            <Nav style={{textTransform: 'uppercase'}} className="ms-auto my-2 my-lg-0 main-nav">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#achievements">Achievements</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <button
          className="btn btn-danger"
          onClick={() => setShowSidebar(false)}
        >
          &times;
        </button>
        <Nav
          className="sidebar-nav"
          style={{ flexDirection: "column", marginTop: "10px" }}
        >
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#achievements">Achievements</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#blogs">Blogs</Nav.Link>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </div>
      {showSidebar && (
        <div className="overlay" onClick={() => setShowSidebar(false)} />
      )}
    </div>
  );
};

export default TopNav;

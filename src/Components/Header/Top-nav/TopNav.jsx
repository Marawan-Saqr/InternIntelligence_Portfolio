import { useState, useEffect } from "react";
import "./TopNav.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const sections = [
  "HOME",
  "EXPERIENCE",
  "ACHIEVEMENTS",
  "ABOUT",
  "BLOGS",
  "TESTIMONIALS",
  "CONTACT",
];

const TopNav = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeLink] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="top-nav">
      <Navbar expand="lg" className={`top-nav-bar`} fixed="top">
        <Container>
          <Navbar.Brand href="#HOME">
            <img style={{ width: "40px" }} src="./logo.png" alt="Logo" />
          </Navbar.Brand>
          <button
            className="dark-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <Navbar.Toggle onClick={() => setShowSidebar(!showSidebar)} />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0 main-nav">
              {sections.map((section) => (
                <Nav.Link
                  key={section}
                  href={`#${section}`}
                  className={activeLink === `#${section}` ? "active" : ""}
                  style={{ textTransform: "uppercase" }}
                >
                  {section}
                </Nav.Link>
              ))}
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
          {sections.map((section) => (
            <Nav.Link key={section} href={`#${section}`}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Nav.Link>
          ))}
        </Nav>
      </div>

      {showSidebar && (
        <div className="overlay" onClick={() => setShowSidebar(false)} />
      )}
    </div>
  );
};

export default TopNav;

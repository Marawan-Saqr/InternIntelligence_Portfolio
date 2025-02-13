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
  // Component States
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#HOME");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = "#home";
      document.querySelectorAll("section").forEach((section) => {
        const { top, height } = section.getBoundingClientRect();
        if (top <= 100 && top + height > 100) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });

  return (
    <div className="top-nav">
      <Navbar
        expand="lg"
        className={`top-nav-bar ${isScrolled ? "scrolled" : ""}`}
        fixed="top"
      >
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
                  onClick={() => setActiveLink(`#${section}`)}
                  style={{ textTransform: "uppercase" }}
                >
                  {section}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar */}
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <button className="btn btn-danger" onClick={() => setShowSidebar(false)}>
          &times;
        </button>
        <Nav className="sidebar-nav" style={{ flexDirection: "column", marginTop: "10px" }}>
          {sections.map((section) => (
            <Nav.Link key={section} href={`#${section}`}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Nav.Link>
          ))}
        </Nav>
      </div>

      {/* Overlay when sidebar is open */}
      {showSidebar && <div className="overlay" onClick={() => setShowSidebar(false)} />}
    </div>
  );
};

export default TopNav;
import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "animate.css"; // Make sure animate.css is imported for using animations

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="lg"
      className={
        scrolled
          ? "navbar-scrolled animate__animated animate__fadeInDown"
          : "animate__animated animate__fadeIn"
      }
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-top animate__animated animate__flipInY"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="animate__animated animate__pulse"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home"
                  ? "active navbar-link animate__animated animate__rubberBand"
                  : "navbar-link animate__animated animate__lightSpeedInLeft"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills"
                  ? "active navbar-link animate__animated animate__rubberBand"
                  : "navbar-link animate__animated animate__lightSpeedInRight"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects"
                  ? "active navbar-link animate__animated animate__rubberBand"
                  : "navbar-link animate__animated animate__lightSpeedInRight"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com"
                className="animate__animated animate__pulse animate__infinite"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com"
                className="animate__animated animate__pulse animate__infinite"
              >
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com"
                className="animate__animated animate__pulse animate__infinite"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <button
              className="btn btn-primary animate__animated animate__pulse animate__infinite"
              onClick={() => console.log("Let's connect")}
            >
              Let's Connect
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

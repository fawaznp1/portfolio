import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // Set initial active link

  const handleToggle = () => setExpanded(prev => !prev);
  const handleClose = () => setExpanded(false);

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expanded={expanded} expand="lg" className="bg-body-dark mx-auto sticky-top">
      <Container>
        <Navbar.Brand href="/" id="fawaznpnavbar">Fawaz N P</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto justify-content-center">
            <Nav.Link
              href="/"
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => { handleSetActive('home'); handleClose(); }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => { handleSetActive('about'); handleClose(); }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
              onClick={() => { handleSetActive('projects'); handleClose(); }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#certificates"
              className={`nav-link ${activeLink === 'certificates' ? 'active' : ''}`}
              onClick={() => { handleSetActive('certificates'); handleClose(); }}
            >
              Certificates
            </Nav.Link>
            <Nav.Link
              href="#services"
              className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
              onClick={() => { handleSetActive('services'); handleClose(); }}
            >
              Services
            </Nav.Link>
            
            <Nav.Link
              href="#contact"
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={() => { handleSetActive('contact'); handleClose(); }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

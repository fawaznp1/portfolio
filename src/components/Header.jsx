import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import LanguageDropdown from './LanguageDropdown';

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const handleToggle = () => setExpanded(prev => !prev);
  const handleClose = () => setExpanded(false);

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  // Add scroll event listener to detect which section is in view
  useEffect(() => {
    const sections = [
      { id: 'home', element: document.getElementById('home') || document.querySelector('main') }, 
      { id: 'about', element: document.getElementById('about') },
      { id: 'projects', element: document.getElementById('projects') },
      { id: 'certificates', element: document.getElementById('certificates') },
      { id: 'services', element: document.getElementById('services') },
      { id: 'contact', element: document.getElementById('contact') }
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adding offset for navbar height

      // Find the current section in view
      for (const section of sections) {
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          const offsetHeight = section.element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section.id);
            break;
          }
        }
      }
    };

    // Initial check on mount
    setTimeout(handleScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expanded={expanded} expand="lg" className="bg-body-dark mx-auto sticky-top">
      <Container>
        <Navbar.Brand href="/" id="fawaznpnavbar" className='ms-5'>Fawaz N P</Navbar.Brand>
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
          <LanguageDropdown />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
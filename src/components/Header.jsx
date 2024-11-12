import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mx-auto  sticky-top">
      <Container>
        <Navbar.Brand href="/" >Fawaz N P</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto justify-content-center">
  <Nav.Link href="/" className="nav-link">Home</Nav.Link>
  <Nav.Link href="#about" className="nav-link">About</Nav.Link>
  <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
  <Nav.Link href="#services" className="nav-link">Services</Nav.Link>
  <Nav.Link href="#certificates" className="nav-link">Certificates</Nav.Link>
  <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
</Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

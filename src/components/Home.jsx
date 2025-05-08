import React, { useState } from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Card,Col,Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import pimage1 from '../images/image6.jpg';
import './Home.css'; 
import Swal from 'sweetalert2';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import safej   from '../images/safej.png';
import weather  from '../images/weather.png';
import  bmw from '../images/bmw.png';
import rest  from '../images/restaurant.png';
import netflix  from '../images/netflix.png';
import auto  from '../images/auto hoirzon.png';
import jillion  from '../images/jillion.png';
import  media from '../images/media.png';
import fawazimage from '../images/fawaz2.jpg';
import Tabww from './Tabww';
import htmlimage from '../images/html logo.svg';
import githubimg from '../images/github1.svg';
import githubimg2 from '../images/github3.svg';
import reactimg from '../images/react.svg';
import nactet from '../images/NACTET_page-0001.jpg';
import nactet2 from '../images/NACTET_page-0002.jpg';
import black1 from '../images/black1.jpg';
import black3 from '../images/black4.jpg';
import ielts from '../images/IELTS SCORE_page-0001.jpg';
import ielts2 from '../images/IELTS SCORE_page-0002.jpg';
import Projectc from './Projectc';
import About from './About';
import Certificate from './Certificate';


function Home() {
    const text = "Hello! I Am Fawaz N P";

    const handleButtonClick = () => {
      toast.success('Resume Downloaded..!');
    }; 


  return (
    <>
    <div className="home-container">
      <div className="overlay">
        <div className="content">
          <h1 className='fawazheading mb-4' style={{ marginRight: '15px' }} >
          {/* {text.split('').map((letter, index) => (
        <span key={index}>{letter}</span>
      ))} */} Hello! I am Fawaz N P
          </h1>
            
          <p className="short-paragraph">
            A passionate Front end developer, eager to learn and create  awesome web experiences.
          </p>
        <button
  className="btn btn-lg px-4 py-2 mt-3 mt-3"
  style={{
    color: 'white',
    backgroundColor: 'transparent', // Transparent background
    border: '2px solid white', // White outline
    borderRadius: '8px', // Rounded corners (optional)
    fontWeight: 'bold',
    transition: 'all 0.3s ease', // Smooth transition effect
  }}onClick={handleButtonClick} >
            <a href="/Fawaz N P Web Dev.pdf" 
    download="Fawaz_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: 'inherit' }}> Resume  <i class="fa-solid fa-download fa-beat fa-sm p-2"></i>
    </a>
            </button> 
            <ToastContainer position='top-left' />
        </div>
      </div>
    </div>

    
    <div id='about'>
  

    <About />
    </div>

{/* tabs*/}
<Tabww />

{/* pojects */}
<h1 className='text-center' id='projects'>My Projects</h1>
  
    <Projectc />


{/* services */}
<Container className="my-5" id='services'>
  <h1 className="text-center mb-4"> Services</h1>

  {/* Row 1 */}
  <Row className="mb-4">
    <Col md={4} className="d-flex justify-content-center mb-2">
      <div className="service-item text-center">
        <img src={reactimg} alt="Full Stack Development" className="service-image" />
        <div className="service-caption">
          <h5>Full Stack Development</h5>
          <p>Expert development using React, Node.js, and MongoDB for creating dynamic and scalable applications.</p>
        </div>
      </div>
    </Col>

    <Col md={4} className="d-flex justify-content-center mb-2">
      <div className="service-item text-center">
        <img src={htmlimage} alt="Front End Development" className="service-image" />
        <div className="service-caption">
          <h5>Front-End Development</h5>
          <p>Building beautiful, responsive, and interactive user interfaces using HTML, CSS, and JavaScript.</p>
        </div>
      </div>
    </Col>

    <Col md={4} className="d-flex justify-content-center mb-2">
      <div className="service-item text-center">
        <img src={githubimg2} alt="Code Hosting" className="service-image" />
        <div className="service-caption">
          <h5>Code Hosting & Collaboration</h5>
          <p>Efficient code hosting services with version control and collaboration features for seamless development.</p>
        </div>
      </div>
    </Col>
  </Row>
</Container>



{/* certificaates */}


    <Certificate />






      <section id='contact'>

      </section>
    </>
  );
}

export default Home;

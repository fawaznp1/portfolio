import React, { useState } from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Card,Col,Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './Home.css'; 
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Tabww from './Tabww';
import htmlimage from '../images/html logo.svg';

import githubimg2 from '../images/github3.svg';
import reactimg from '../images/react.svg';


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
        <a
  href="/Fawaz N P Web Dev.pdf"
  download="Fawaz_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-lg px-4 py-2 mt-3"
  onClick={handleButtonClick}
  style={{
    color: 'white',
    backgroundColor: 'transparent',
    border: '2px solid white',
    borderRadius: '8px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
     minWidth: '48px',
    minHeight: '48px',
  }}
  aria-label="Download Resume"
>
  Resume <i className="fa-solid fa-download fa-beat fa-sm p-2"></i>
</a>
 
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


    <Certificate />

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


   






      <section id='contact'>

      </section>
    </>
  );
}

export default Home;

import React, { useState } from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Card,Col,Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import pimage1 from '../images/image6.jpg';
import './Home.css'; 
import Swal from 'sweetalert2';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import safej   from '../images/safej.png';
import weather  from '../images/weather.png';
import  bmw from '../images/bmw.png';
import rest  from '../images/restaurant.png';
import netflix  from '../images/netflix.png';
import auto  from '../images/auto hoirzon.png';
import jillion  from '../images/jillion.png';
import  media from '../images/media.png';
import fawazimage from '../images/Fawaz.jpg';
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


function Home() {
    const text = "Hello! I Am Fawaz N P";

    const handleButtonClick = () => {
      let timerInterval;
      Swal.fire({
        
        icon:'success',
        html: "Great, you can view it as Fawaz_Resume.pdf",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    };

   /*  useEffect((fawazimg) => {
        gsap.from(".fawazimg", {
          x: 100, 
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
    
        gsap.from(".section-paragraph", {
          x: -100, 
          opacity: 0,
          duration: 1,
          delay: 0.2, 
          ease: "power3.out"
        });
      }, []);
   */
   

    
  
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
            A passionate Front end developer, eager to learn and create awesome web experiences.
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
            <a href="/Fawaz.pdf" 
    download="Fawaz_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: 'inherit' }}> Resume  <i class="fa-solid fa-download fa-beat fa-sm p-2"></i>
    </a>
            </button> 
        </div>
      </div>
    </div>

    
    <div>
   {/*  <div id="about" className="about-section py-5">
    <div className="container my-5">
    <h1 className="section-heading text-center">About Me</h1>
  <div className="row align-items-center">
   
    <div className="col-md-3 text-center">
      <img class='fawazimg'
        src={fawazimage}
        alt="Profile"
        className="img-fluid rounded-circle"
        style={{ width: '250px', height: '250px', objectFit: 'cover' , overflow: 'hidden' }}
      />
    </div>

   
    <div className="col-md-9">
      
      <p className="section-paragraph text-center">
        I'm a passionate software developer with a keen interest in <span className="text-success">React </span>
        development and <span className="text-success">Web </span> technologies. I have a solid foundation in full-stack <span className="text-success">(MEARN) </span> development and am always eager to learn new tools and technologies to build innovative and user-friendly applications.
        <br /><br />
        With a creative mindset and problem-solving skills, I aim to contribute to projects that solve real-world problems and enhance user experiences.
      </p>
    </div>
  </div>
</div>
</div> */}

<div id="about" className="about-section py-5">
      <div className="container my-5">
        <h1 className="section-heading text-center">About Me</h1>
        <div className="row align-items-center">
          {/* Image Section (Equal Part) */}
          <div className="col-md-6 text-center">
            <div className="image-container" style={{ position: 'relative' }}>
              <img
                className="fawazimg img-fluid rounded-circle"
                src={fawazimage}
                alt="Profile"
                style={{
                  width: '280px',
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  border: '4px solid #fff', // White border for aesthetic appeal
                  transition: 'transform 0.3s ease-in-out'
                }}
              />
            </div>
          </div>

          {/* Text Section (Equal Part) */}
          <div className="col-md-6">
            <p className="section-paragraph text-center mt-2">
              I'm a software developer passionate about <span className="text-success">React</span> and <span className="text-success">Web</span> development. I specialize in full-stack <span className="text-success">(MEARN)</span> and love learning new technologies.
              <br /><br />
              My goal is to build innovative, user-friendly solutions that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>

    
{/* tab */}
<Tabww />

{/* pojects */}
<h1 className='text-center' id='projects'>My Projects</h1>
 {/* <div class="containerp col-md-12 container d-flex align-items-center justify-content-center position-relative flex-wrap">
       <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
                <a href="https://netflixfz.vercel.app/" target='_blank'><img src={netflix} /></a>
            </div>
            
            <div class="content">
                <h2>Netflix (Clone)</h2>
                <p>A Netflix clone in React features a sleek UI, displays movie banners, categories, and trailers, integrates a movie API for fetching real-time data, and offers search functionality. It mimics the original platform's layout and implements user authentication for a complete experience.</p>
                
              <a href="/">hello</a>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
                <a href='https://autohorizon.vercel.app/' target='_blank'>
                  <img src={auto} />
                 
                </a>
            </div>
            <div class="content">
                <h2>Auto Horizon</h2>
                <p>A React-based blog, focuses on automotive topics, showcasing featured articles, car reviews, and industry news. It offers a responsive layout, includes a scrollable dropdown for car brands, and links users to detailed posts. The site is designed for seamless navigation and visual appeal.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
              <a href=" https://videoplayer-frontend-fz.vercel.app/" target='_blank'><img src={media} /></a>
                
            </div>
            <div class="content">
                <h2>Media player</h2>
                <p>A React-based media player project includes audio and video playback, a sleek user interface, play/pause controls, volume adjustment, and a playlist feature. It supports multiple file formats, and offers a seamless user experience with modern styling and smooth animations.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
               <a href=" " target='_blank'><img src={rest} /></a> 
            </div>
            <div class="content">
                <h2></h2>
                <p>A React project, helps users find nearby hotels and restaurants using location services. It features a map interface, a responsive design, real-time search, and user reviews. The platform focuses on user experience, offering detailed hotel information, ratings, and directions.</p>
            </div>
        </div>


        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
               <a href="" target='_blank'><img src={bmw} /></a> 
            </div>
            <div class="content">
                <h2>BMW</h2>
                <p>A BMW clone built with React showcases luxury cars, features a sleek UI, a model gallery, car details, and a booking form. It includes responsive design, animations, and integrates a car API for real-time data, enhancing user engagement and experience.</p>
            </div>
        </div>

        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
               <a href="" target='_blank'><img src={weather} /></a> 
            </div>
            <div class="content">
                <h2></h2>
                <p>A Javascript based app, provides real-time weather updates, forecasts, and location-based data. It features a sleek UI, responsive design, search functionality, and integrates a weather API for accurate information. The app offers detailed weather metrics and a seamless user experience.</p>
            </div>
        </div>

        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
               <a href="https://safejourneyfawaz.netlify.app/" target='_blank'><img src={safej} /></a> 
            </div>
            <div class="content">
                <h2></h2>
                <p></p>
            </div>
        </div>


        <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
               <a href="" target='_blank'><img src={jillion} /></a> 
            </div>
            <div class="content">
                <h2>Jillion Technologies</h2>
                <p>A Bootstrap-based corporate website, highlights company services& offers client testimonials. It features a professional design, responsive layout, and contact forms, focusing user engagement and seamless browsing experience.</p>
            </div>
        </div>
    </div> */}



    
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
<Container className="certificates my-5 mb-4" id="certificates">
  <h1 className="certify text-center mb-4">Certificates</h1>

  {/* Row for Certificates */}
  <Row className="mb-4">
    <Col md={6} sm={12} lg={4} className="d-flex justify-content-center mb-2">
      <div className="certificate-item text-center">
        <img src={ielts2} alt="Certificate 1" className="certificate-image" />
        <div className="certificate-caption">
        <h5>IELTS Certification</h5>
        <p>An overall score of 6.5, demonstrating English proficiency.</p>
        </div>
      </div>
    </Col>

    

    <Col md={6} sm={12} lg={4} className="d-flex justify-content-center mb-2">
      <div className="certificate-item text-center">
        <img src={nactet2} alt="Certificate 3" className="certificate-image" />
        <div className="certificate-caption">
          <h5>NACTET</h5>
          <p>Certification in MEARN Stack from National council for technology and training</p>
        </div>
      </div>
    </Col>

    
  </Row>
</Container>

    






      <section id='contact'>

      </section>
    </>
  );
}

export default Home;

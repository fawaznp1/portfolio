import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Slider from 'react-slick';
import './About.css';
import fawaz2 from '../images/fawaz2.jpg';
import fawaz3 from '../images/fawaz3.jpg';
import fawaz6 from '../images/fawaz6.jpg';
import Carousel from 'react-bootstrap/Carousel';



gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = () => {
  const carouselRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      carouselRef.current,
      { x: '-100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { x: '100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


 

  return (
    <div className="animated-container">
      <div className="carousel-section" ref={carouselRef}>
       
 
<Carousel>
      <Carousel.Item interval={1000}>
        <img src={fawaz2} alt='p1'  />
        
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img src={fawaz3} alt='p2'/>
       
      </Carousel.Item>
      
      <Carousel.Item interval={800}>
        <img src={fawaz6} alt='p4' />
       
      </Carousel.Item>
    </Carousel>
      </div>
      <div className="text-section" ref={textRef}>
        <h2>About Me</h2>
        <p>
        I'm a software developer, passionate about <span style={{color:'aqua'}}>React</span>  and Web development. I specialize in full-stack <span style={{color:'aqua'}}> (MEARN)</span> and love learning new technologies.
        My goal is to build innovative, user-friendly solutions that solve real-world problems.


        </p>
      </div>
    </div>
  );
};

export default AnimatedSection;

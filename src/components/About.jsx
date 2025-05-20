import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import fawaz2 from '../images/fawaz2.jpg';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = () => {
  const imageContainerRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Image animation
    gsap.fromTo(
      imageContainerRef.current,
      { x: '-100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Image rotation animation
    gsap.fromTo(
      imageRef.current,
      { rotation: -5 },
      {
        rotation: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Glow effect animation
    gsap.fromTo(
      glowRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 0.6,
        scale: 1,
        duration: 1.5,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: glowRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Text section animations
    gsap.fromTo(
      textRef.current,
      { x: '100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { y: '50px', opacity: 0 },
      {
        y: '0',
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Paragraph animation
    gsap.fromTo(
      paragraphRef.current,
      { y: '30px', opacity: 0 },
      {
        y: '0',
        opacity: 1,
        duration: 1,
        delay: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Create a rotation hover effect for the image
    const imageElement = imageRef.current;
    
    const handleMouseEnter = () => {
      gsap.to(imageElement, {
        rotation: 3,
        scale: 1.03,
        boxShadow: '0 25px 50px -12px rgba(0, 100, 255, 0.4)',
        duration: 0.4,
        ease: 'power2.out'
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(imageElement, {
        rotation: 0,
        scale: 1,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        duration: 0.4,
        ease: 'power2.out'
      });
    };
    
    imageElement.addEventListener('mouseenter', handleMouseEnter);
    imageElement.addEventListener('mouseleave', handleMouseLeave);
    
    // Cleanup event listeners
    return () => {
      imageElement.removeEventListener('mouseenter', handleMouseEnter);
      imageElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="animated-container">
      <div className="image-section" ref={imageContainerRef}>
        <div className="image-glow" ref={glowRef}></div>
        <div className="image-wrapper">
          <img 
            src={fawaz2} 
            alt="Fawaz" 
            className="about-image" 
            ref={imageRef}
            loading="lazy" 
          />
        </div>
      </div>
      
      <div className="text-section" ref={textRef}>
        <h2 ref={headingRef} className="animated-heading">About Me</h2>
        <div ref={paragraphRef} className="bio-text">
          <p>
            I'm a software developer, passionate about <span className="highlight">React</span> and Web development. I specialize in full-stack <span className="highlight">(MERN)</span> and love learning new technologies.
          </p>
          <p> 
            My goal is to build innovative, user-friendly solutions that solve real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSection;
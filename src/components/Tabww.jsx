import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// At top
import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt, FaNodeJs, FaJsSquare, FaDatabase, FaAngular ,FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './Tabww.css';

gsap.registerPlugin(ScrollTrigger);

const ProfileSection = () => {
  const profileRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      profileRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: profileRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div ref={profileRef} className="profile-container">
      <div className="skills-section">
  <h2>Skills</h2>
  <ul className="zigzag-list">
    <li className="left"><FaReact /> React</li>
    <li className="right"><FaAngular /> Angular</li>
    <li className="left"><FaJsSquare /> JavaScript</li>
    <li className="right"><FaBootstrap /> Bootstrap</li>
    <li className="left"><FaDatabase /> SQL</li>
    <li className="right"><FaHtml5 /> HTML</li>
    <li className="left"><FaCss3Alt /> CSS</li>
    <li className="right"><FaDatabase /> MongoDB</li>
    <li className="left"><FaNodeJs /> Node.js</li>
  </ul>
</div>

<div className="timeline-section">
  <h2 id='heading' style={{textAlign:'center'}}>Experience & Education</h2>
  <div className="education-zigzag">
    <div className="edu-bubble left">
      <h3>MERN Stack Internship</h3>
      <p>Luminar Technolab <br /> (07/23 - 01/24)</p>
    </div>
    <div className="edu-bubble right">
      <h3>BCA</h3>
      <p>Kannur University <br /> (2020 - 2023)</p>
    </div>
    <div className="edu-bubble left">
      <h3>Plus Two</h3>
      <p>Edayannur GHSS <br />(2018 - 2020)</p>
    </div>
    <div className="edu-bubble right">
      <h3>SSLC</h3>
      <p>Koodali HSS <br /> (2017 - 2018)</p>
    </div>
  </div>
</div>

</div>
  );
};

export default ProfileSection;

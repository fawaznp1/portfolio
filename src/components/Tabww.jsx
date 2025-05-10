import React from 'react';
import { 
  FaReact, 
  FaBootstrap, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaJsSquare, 
  FaDatabase, 
  FaAngular,
  FaGraduationCap,
  FaBriefcase,
  FaGithub,
  
} from 'react-icons/fa';
import { SiMongodb, SiVercel, SiMui  } from 'react-icons/si';

import './Tabww.css';

const ProfileSection = () => {
  const skills = [
  { name: 'React', icon: <FaReact className="skill-icon react" /> },
  { name: 'Angular', icon: <FaAngular className="skill-icon angular" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="skill-icon js" /> },
  
   { name: 'HTML', icon: <FaHtml5 className="skill-icon html" /> },
   { name: 'Bootstrap', icon: <FaBootstrap className="skill-icon bootstrap" /> },
  { name: 'SQL', icon: <FaDatabase className="skill-icon sql" /> },
 
  
  { name: 'MongoDB', icon: <SiMongodb className="skill-icon mongodb" /> },
  { name: 'CSS', icon: <FaCss3Alt className="skill-icon css" /> },
  { name: 'Node.js', icon: <FaNodeJs className="skill-icon nodejs" /> },
  { name: 'GitHub', icon: <FaGithub className="skill-icon github" /> },
  { name: 'Vercel', icon: <SiVercel className="skill-icon vercel" /> },
  { name: 'Material UI', icon: <SiMui className="skill-icon mui" /> }
];

  const experiences = [
    {
      title: 'MERN Stack Internship',
      place: 'Luminar Technolab',
      period: '07/23 - 01/24',
      type: 'work',
      icon: <FaBriefcase className="experience-icon" />
    },
    {
      title: 'BCA',
      place: 'Kannur University',
      period: '2020 - 2023',
      type: 'education',
      icon: <FaGraduationCap className="experience-icon" />
    },
    {
      title: 'Plus Two',
      place: 'Edayannur GHSS',
      period: '2018 - 2020',
      type: 'education',
      icon: <FaGraduationCap className="experience-icon" />
    },
    {
      title: 'SSLC',
      place: 'Koodali HSS',
      period: '2017 - 2018',
      type: 'education',
      icon: <FaGraduationCap className="experience-icon" />
    }
  ];

  return (
    <div className="main-profile-section">
      <div className="profile-grid">
        {/* Skills Section */}
        <div className="skills-section">
          <h2 className="section-heading">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item"> 
                <div className="skill-icon-container">
                  {skill.icon}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Education Section */}
        <div className="timeline-section">
          <h2 className="section-heading">Experience & Education</h2>
          <div className="timeline">
            {experiences.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item ${item.type}`}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-icon">
                    {item.icon}
                  </div>
                  <div className="timeline-text">
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-place">{item.place}</p>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
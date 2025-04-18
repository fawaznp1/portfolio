import React, { useState } from "react";
import "./Certificates.css"; 
import ielts2 from '../images/IELTS SCORE_page-0002.jpg';
import nactet2 from '../images/NACTET_page-0002.jpg';


function Certificates() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const certificates = [
    {
      id: 1,
      image: "../assets/ielts2.jpg",
      title: "IELTS Certification",
      description: "An overall score of 6.5, demonstrating English proficiency.",
      color: "#4E6BFF" 
    },
    {
      id: 2,
      image: "../assets/nactet2.jpg",
      title: "NACTET",
      description: "Certification in MEARN Stack from National Council for Technology and Training.",
      color: "#FF5E5E" 
    }
  ];

  return (
    <div className="certificates-container my-5">
      <div className="certificates-header text-center mb-5">
        <h2 className="fw-bold position-relative d-inline-block">
          My Certifications
          <span className="position-absolute w-50 bg-primary" style={{ 
            height: "4px", 
            bottom: "-10px", 
            left: "25%",
            borderRadius: "2px"
          }}></span>
        </h2>
        <p className="text-muted mt-3">Professional qualifications that validate my expertise</p>
      </div>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div 
            key={cert.id}
            className="certificate-card position-relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ 
              transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: hoveredIndex === index 
                ? '0 12px 30px rgba(0, 0, 0, 0.15)' 
                : '0 5px 15px rgba(0, 0, 0, 0.08)',
            }}
          >
            <div className="certificate-accent-border" style={{ backgroundColor: cert.color, height: '6px', borderRadius: '8px 8px 0 0' }}></div>
            
            <div className="certificate-content p-4 bg-white rounded-bottom">
              <div className="certificate-image-container mb-4">
                <img 
                  src={ielts2} 
                  alt={cert.title} 
                  className="certificate-image" 
                  style={{ 
                    maxWidth: "100%", 
                    borderRadius: "8px",
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }} 
                />
              </div>
              
              <div className="certificate-details">
                <h4 className="certificate-title fw-bold mb-2">{cert.title}</h4>
                <p className="certificate-description text-muted">{cert.description}</p>
                
                <div className="certificate-badge mt-3 d-inline-block py-1 px-3 rounded-pill" 
                  style={{ 
                    backgroundColor: `${cert.color}15`, // Using the color with 15% opacity
                    color: cert.color,
                    border: `1px solid ${cert.color}30`,
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}>
                  Verified
                </div>
              </div>
              
              <button 
                className="view-certificate-btn mt-3 d-flex align-items-center"
                style={{ 
                  color: cert.color, 
                  background: 'transparent',
                  border: 'none',
                  padding: '0',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  opacity: hoveredIndex === index ? '1' : '0.7',
                  transition: 'opacity 0.3s ease'
                }}
              >
                View Certificate
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2">
                  <path d="M3 8H13" stroke={cert.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 4L13 8L9 12" stroke={cert.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
import  { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Service.css';



// Import your images
import reactimg from '../images/react.svg';
import htmlimage from '../images/html logo.svg';
import githubimg2 from '../images/github1.svg';
gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.querySelector('.services-master-section');
    if (section) observer.observe(section);

    const serviceCards = servicesRef.current.querySelectorAll('.services-master-card');
    gsap.fromTo(serviceCards,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%"
        }
      }
    );
    
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      image: reactimg,
      title: "Full Stack Development",
      description: "Expert development using React, Node.js, and MongoDB for creating dynamic and scalable applications.",
      features: ["React.js", "Node.js", "MongoDB", "RESTful APIs", "GraphQL"],
      bgColor: "var(--gradient-blue)",
      delay: 0
    },
    {
      id: 2,
      image: htmlimage,
      title: "Front-End Development",
      description: "Building beautiful, responsive, and interactive user interfaces using HTML, CSS, and JavaScript.",
      features: ["React.JS", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
      bgColor: "var(--gradient-purple)",
      delay: 200
    },
    {
      id: 3,
      image: githubimg2,
      title: "Code Hosting & Collaboration",
      description: "Efficient code hosting services with version control and collaboration features for seamless development.",
      features: ["GitHub", "Netlify , Vercel & Render", "Version Control", "CI/CD", "Team Collaboration"],
      bgColor: "var(--gradient-green)",
      delay: 400
    }
  ];
 
  return (
    <section className="services-master-section " id="services">
      <div className="services-background">
        <div className="services-blob services-blob-1"></div>
        <div className="services-blob services-blob-2"></div>
        <div className="services-grid-pattern"></div>
      </div>
      
      <div className="services-master-container ">
        <div className={`services-master-header ${isVisible ? 'animate-in' : ''}`}>
         
          <h1 className="services-master-title ">SERVICES</h1>
          <p className="services-master-subtitle">
            Cutting-edge solutions tailored to meet your business needs with unparalleled expertise and innovation
          </p>
          <div className="services-master-separator">
            <span className="services-master-separator-line"></span>
            <span className="services-master-separator-diamond"></span>
            <span className="services-master-separator-line"></span>
          </div>
        </div>
        
        <div className="services-master-cards" ref={servicesRef}>
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`services-master-card ${isVisible ? 'animate-in' : ''}`} 
              style={{ animationDelay: `${service.delay}ms` }}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="services-master-card-inner">
                <div className="services-master-card-front">
                  <div 
                    className="services-master-card-icon-container"
                    style={{ background: service.bgColor }}
                  >
                    <img src={service.image} alt={service.title} className="services-master-card-icon" />
                    <div className="services-master-card-icon-glow"></div>
                  </div>
                  
                  <h3 className="services-master-card-title">{service.title}</h3>
                  <p className="services-master-card-description">{service.description}</p>
                  
                  <div className="services-master-card-action">
                    <span className="services-master-card-action-text">Explore Features</span>
                    <span className="services-master-card-action-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                      </svg>
                    </span>
                  </div>
                </div>
                
                <div className="services-master-card-back">
                  <h3 className="services-master-card-title-back">{service.title}</h3>
                  <ul className="services-master-card-features">
                    {service.features.map((feature, i) => (
                      <li key={i} className="services-master-card-feature-item">
                        <span className="services-master-card-feature-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))} 
                  </ul>
                  <div className="services-master-card-action-back">
                   {/*  <span className="services-master-card-action-text-back">Go Back</span>
                    <span className="services-master-card-action-icon-back">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="currentColor"/>
                      </svg>
                    </span> */}
                  </div>
                </div>
              </div> 
              
              {activeCard === service.id && (
                <div className="services-master-card-glows">
                  <div className="services-master-card-glow-1"></div>
                  <div className="services-master-card-glow-2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
      {/*   <div className={`services-master-cta ${isVisible ? 'animate-in' : ''}`}>
          <button className="services-master-cta-button">
            <span className="services-master-cta-button-text">Get Started</span>
            <span className="services-master-cta-button-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
              </svg>
            </span>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
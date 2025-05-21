import './Projectc.css';
import React, { useRef, useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { data } from "../components/Data";
import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const extraProjectsRef = useRef(null); // for scroll
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isLiveHovered, setIsLiveHovered] = useState(false);

  const handleToggle = () => {
    setShowAll((prev) => {
      if (!prev && extraProjectsRef.current) {
        setTimeout(() => {
          extraProjectsRef.current.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay for render
      }
      return !prev;
    });
  };

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(el => new window.bootstrap.Tooltip(el));
  }, []);

  return (
    <div className="project-wrapper">
      <div className="project-tabs-container">
       <Tabs justify className="custom-tabs" variant="pills">
          <Tab eventKey="tab-1" title="" className="custom-tab">
            <Row>
              {data.slice(0, 3).map((item, index) => (
                <Col className="mt-3" md={6} sm={12} lg={4} key={index}>
                  <div className="project-card-container">
                    <Card className="project-card cr">
                      <Card.Img className="project-card-image" variant="top" src={item.imgsrc} loading='lazy' alt={item.alt} />
                      <Card.Body className="project-card-body">
                        <Card.Title className="project-card-title">{item.title}</Card.Title>
                        <Card.Text className="project-card-text">
                          {item.desc}
                          <p className="project-technologies">
                            Technologies used:
                            <span className="project-technologies-list">{item.Technolgies}</span>
                          </p>
                        </Card.Text>
                     
                        <div className="project-links-container">
                          <a 
                            className={`project-github-link ${isGithubHovered ? 'github-hover' : ''}`}
                            target="__blank" 
                            href={item.github}
                            onMouseEnter={() => setIsGithubHovered(true)}
                            onMouseLeave={() => setIsGithubHovered(false)}
                          >
                            <i className="fa-brands fa-github fa-lg project-icon"></i>
                            <span className="project-link-text">Source Code</span>
                          </a>
                          
                          <a
                            className={`project-live-link ${isLiveHovered ? 'live-hover' : ''}`}
                            target="__blank" 
                            href={item.link}
                            title="View Live Demo"
                            onMouseEnter={() => setIsLiveHovered(true)}
                            onMouseLeave={() => setIsLiveHovered(false)}
                          >
                            <i className="fa-solid fa-arrow-up-right-from-square fa-lg project-icon"></i>
                            <span className="project-link-text">Preview Site</span>
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>

            {showAll && (
              <Row ref={extraProjectsRef}>
                {data.slice(3).map((item, index) => (
                  <Col className="mt-4" md={6} sm={12} lg={4} key={index + 3}>
                    <div className="project-card-container">
                      <Card className="project-card cr">
                        <Card.Img className="project-card-image" variant="top" src={item.imgsrc} />
                        <Card.Body className="project-card-body">
                          <Card.Title className="project-card-title">{item.title}</Card.Title>
                          <Card.Text className="project-card-text">
                            {item.desc}
                            <p className="project-technologies">
                              Technologies used:
                              <span className="project-technologies-list">{item.Technolgies}</span>
                            </p>
                          </Card.Text>
                        
                          <div className="project-links-container">
                            <a 
                              className={`project-github-link ${isGithubHovered ? 'github-hover' : ''}`}
                              target="__blank" 
                              href={item.github}
                              onMouseEnter={() => setIsGithubHovered(true)}
                              onMouseLeave={() => setIsGithubHovered(false)}
                            >
                              <i className="fa-brands fa-github fa-lg project-icon"></i>
                              <span className="project-link-text">Source Code</span>
                            </a>
                            
                            <a
                              className={`project-live-link ${isLiveHovered ? 'live-hover' : ''}`}
                              target="__blank"
                              href={item.link}
                              title="View Live Demo"
                              onMouseEnter={() => setIsLiveHovered(true)}
                              onMouseLeave={() => setIsLiveHovered(false)}
                            >
                              <i className="fa-solid fa-arrow-up-right-from-square fa-lg project-icon"></i>
                              <span className="project-link-text">Preview Site</span>
                            </a>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                ))}
              </Row>
            )}

            <div className="project-button-container">
              <button className="see-more-btn" onClick={handleToggle}>
                {showAll ? "Show Less" : "See More Projects"}
              </button>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Projects;
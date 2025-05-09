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
    <div className="project-wrapper d-flex justify-content-center flex-column">
      <div className="mb-1">
        <Tabs
          justify
          variant="underline"
          className="text-white"
          defaultActiveKey="tab-1"
        >
          <Tab eventKey="tab-1" title="">
            <Row>
              {data.slice(0, 3).map((item, index) => (
                <Col className="mt-1" md={6} sm={12} lg={4} key={index}>
                  <div className="d-flex justify-content-center">
                    <Card className="cr" style={{ width: "23rem", height: "19rem" }}>
                      <Card.Img className="object-fit-fill" height={"300px"} variant="top" src={item.imgsrc} loading='lazy' alt={item.alt} />
                      <Card.Body>
                        <Card.Title className="text-white">{item.title}</Card.Title>
                        <Card.Text className="text-white mt-2" style={{ fontSize: "12px" }}>
                          {item.desc}
                          <p className="mt-3">
                            Technologies used:
                            <span className="fw-bold">{item.Technolgies}</span>
                          </p>
                        </Card.Text>
                       {/*  <div className="icon">
                          <a style={{ border: "0px", marginRight: "5px" }} target="__blank" href={item.github}>
                            <i style={{ color: "white" }} className="fa-brands fa-github fa-2xl"></i>
                          </a>
                          <a style={{ border: "0px" }} target="__blank" href={item.link}>
                            <i style={{ color: "white" }} className="fa-solid fa-arrow-up-right-from-square fa-2xl"></i>
                          </a>
                        </div> */}
                         <div className="icon flex gap-3 items-center">
      <a 
        style={{ 
          border: "0px",
          marginRight: "5px",
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: isGithubHovered ? "#333" : "#24292e",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          transition: "all 0.3s ease",
          transform: isGithubHovered ? "translateY(-2px)" : "translateY(0)",
          boxShadow: isGithubHovered ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",textDecoration: "none"
        }} 
        target="__blank" 
        href={item.github}
        onMouseEnter={() => setIsGithubHovered(true)}
        onMouseLeave={() => setIsGithubHovered(false)}
      >
        <i style={{ color: "white", marginRight: "0.5rem" }} className="fa-brands fa-github fa-lg"></i>
        <span className="text-white font-medium">View Source Code</span>
      </a>

      
      
      <a
        style={{ 
          border: "0px",
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: isLiveHovered ? "#0056b3" : "#007bff",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          transition: "all 0.3s ease",
          transform: isLiveHovered ? "translateY(-2px)" : "translateY(0)",
          boxShadow: isLiveHovered ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"
        }}
        target="__blank" 
        href={item.link}
        title="View Live Demo"
        onMouseEnter={() => setIsLiveHovered(true)}
        onMouseLeave={() => setIsLiveHovered(false)}
      >
        <i style={{ color: "white", marginRight: "0.5rem" }} className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
        <span className="text-white font-medium">Preview Site</span>
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
                    <div className="d-flex justify-content-center">
                      <Card className="cr" style={{ width: "23rem", height: "19rem" }}>
                        <Card.Img className="object-fit-fill" height={"300px"} variant="top" src={item.imgsrc} />
                        <Card.Body>
                          <Card.Title className="text-white">{item.title}</Card.Title>
                          <Card.Text className="text-white mt-2" style={{ fontSize: "12px" }}>
                            {item.desc}
                            <p className="mt-3">
                              Technologies used:
                              <span className="fw-bold">{item.Technolgies}</span>
                            </p>
                          </Card.Text>
                         {/*  <div className="icon">
                            <a style={{ border: "0px", marginRight: "5px" }} target="__blank" href={item.github}>
                              <i style={{ color: "white" }} className="fa-brands fa-github fa-2xl"></i>
                            </a>
                            <a 
                              style={{ border: "0px" }} 
                              target="__blank" 
                              href={item.link} 
                              title="View Live Demo"  // Tooltip text
                            >
                           <i style={{ color: "white" }} className="fa-solid fa-arrow-up-right-from-square fa-2xl"></i>
                            </a>

                          </div> */}
                           <div className="icon flex gap-3 items-center">
      <a 
        style={{ 
          border: "0px",
          marginRight: "5px",
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: isGithubHovered ? "#333" : "#24292e",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          transition: "all 0.3s ease",
          transform: isGithubHovered ? "translateY(-2px)" : "translateY(0)",
          boxShadow: isGithubHovered ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",textDecoration: "none"
        }} 
        target="__blank" 
        href={item.github}
        onMouseEnter={() => setIsGithubHovered(true)}
        onMouseLeave={() => setIsGithubHovered(false)}
      >
        <i style={{ color: "white", marginRight: "0.5rem" }} className="fa-brands fa-github fa-lg"></i>
        <span className="text-white font-medium">View Source Code</span>
      </a>
      
      <a
        style={{ 
          border: "0px",
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: isLiveHovered ? "#0056b3" : "#007bff",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          transition: "all 0.3s ease",
          transform: isLiveHovered ? "translateY(-2px)" : "translateY(0)",
          boxShadow: isLiveHovered ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"
        }}
        target="__blank"
        href={item.link}
        title="View Live Demo"
        onMouseEnter={() => setIsLiveHovered(true)}
        onMouseLeave={() => setIsLiveHovered(false)}
      >
        <i style={{ color: "white", marginRight: "0.5rem" }} className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>
        <span className="text-white font-medium">Preview Site</span>
      </a>
                         </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                ))}
              </Row>
            )}

            <div className="text-center mt-4">
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

import './Projectc.css';
import React from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { data } from "../components/Data";




function Projects() { 
  console.log(data);
  return (
    <div className="project-wrapper d-flex justify-content-center flex-column">
     
      <div className="mb-1">
        <Tabs
          justify
          variant="underline"
          className="text-white mt-2"
          defaultActiveKey="tab-1"
        >
          <Tab eventKey="tab-1" title="">
            <Row>
              {data.map((item) => (
                <Col className="mt-4" md={6} sm={12} lg={4}>
                  <div className="d-flex justify-content-center">
                    <Card
                      className="cr"
                      style={{ width: "23rem", height: "19rem" }}
                    >
                      <Card.Img
                        className="object-fit-fill"
                        height={"300px"}
                        variant="top"
                        src={item.imgsrc}
                      />
                      <Card.Body>
                        <Card.Title className="text-white">
                          {item.title}
                        </Card.Title>
                        <Card.Text
                          className="text-white mt-2"
                          style={{ fontSize: "12px" }}
                        >
                          {item.desc}
                          <p className="mt-3">
                            Technologies used:
                            <span className="fw-bold">{item.Technolgies}</span>
                          </p>
                        </Card.Text>
                        <div className="icon">
                          <a
                            style={{ border: "0px", marginRight: "5px" }}
                            target="__blank"
                            href={item.github}
                          >
                            <i
                              style={{ color: "white" }}
                              class="fa-brands fa-github fa-2xl"
                            ></i>
                          </a>
                          <a
                            style={{ border: "0px" }}
                            target="__blank"
                            href={item.link}
                          >
                            <i
                              style={{ color: "white" }}
                              class="fa-solid fa-arrow-up-right-from-square fa-2xl"
                            ></i>
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              ))}{" "}
            </Row>
          </Tab>
         
         
        </Tabs>
      </div>
    </div>
  );
}

export default Projects;
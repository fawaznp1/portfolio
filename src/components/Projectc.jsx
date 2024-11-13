import './Projectc.css';
import React from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { data } from "../components/Data";
import one from '../images/netflix.png'
import two from '../images/netflix.png'
import three from '../images/netflix.png'
import four from '../images/netflix.png'
import five from '../images/netflix.png'
import six from '../images/netflix.png'



function Projects() { 
  console.log(data);
  return (
    <div className="d-flex justify-content-center flex-column">
     {/*  <h5 className="text-white mb-1 fw-light text-center">I would like to introduce some of my recent works...</h5> */}


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
                <Col className="mt-5" md={6} sm={12} lg={4}>
                  <div className="d-flex justify-content-center">
                    <Card
                      className="cr"
                      style={{ width: "23rem", height: "300px" }}
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
                              class="fa-brands fa-github fa-xl"
                            ></i>
                          </a>
                          <a
                            style={{ border: "0px" }}
                            target="__blank"
                            href={item.link}
                          >
                            <i
                              style={{ color: "white" }}
                              class="fa-solid fa-arrow-up-right-from-square fa-xl"
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
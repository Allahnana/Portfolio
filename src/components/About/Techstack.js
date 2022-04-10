import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiFirebase, 
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

     <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h1>HTML</h1>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h1>CSS</h1>
      </Col>

     
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h1>JavaScript</h1>
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h1>React</h1>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h1>Git</h1>
      </Col>

     

       
    

    </Row>
  );
}

export default Techstack;

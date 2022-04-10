import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  
  SiVisualstudiocode,
  SiVercel,
  SiWindows,
  SiNetlify,
  SiUbuntu,
  SiFigma,
  SiUikit,
  SiGithub,
  SiFirebase,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
        <h1>Ubuntu</h1>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <h1>Windows</h1>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h1>VS Code</h1>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h1>GitHub</h1>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h1>Firebase</h1>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h1>Vercel</h1>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h1>Netlify</h1>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <h1>Figma</h1>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiUikit />
        <h1>Uikit</h1>
      </Col>
      
    </Row>
  );
}

export default Toolstack;

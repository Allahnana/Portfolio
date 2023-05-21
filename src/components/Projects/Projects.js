import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import cgpa from "../../Assets/Projects/cgpa.png";
import netflix from "../../Assets/Projects/netflix.png";
import github from "../../Assets/Projects/github.png";
// import hoobank from "../../Assets/Projects/hoobank.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              title="GitHub Finder"
              description="So I built this mini project to sharpen up the basics i learned in HTML, CSS and Javascript. It's a project where one can search for a github user by username and the UI will display the users Profile image,Repos, 5 recent repos, location, company, bio and so on."
              link="https://github.com/Allahnana/GitHub-Finder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              title="Netflix Clone"
              description="Fakeflix is a netflix clone. Netflix is a streaming service that offers a wide variety of award winning TV shows and movies. I have used Reactjs and Styled components for frontend and firebase for the backend. It is design to give near perfect experience of using the original netflix. I hope you like the implementation of the clone."
              link="https://github.com/Allahnana/Netflix-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              title="My Portfolio"
              description=" I used Reactjs to build this amazing portfolio website, this is the latest project i have worked on in 2022. Reactjs is one of the best technology i have ever worked with. It is fast smooth and trendy. I have used Plain css to make this design. Hope you will like it. Feel free to connect with me. Your feedbacks are always appriciated."
              link="https://github.com/Allahnana/Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cgpa}
              title="CGPA Calculator"
              description=" I used HTML, CSS, Bootstrap and Javascript to build this mini project. Hope you will like it. Feel free to connect with me. Your feedbacks are always appriciated."
              link="https://github.com/Allahnana/CGPA-Calculator"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

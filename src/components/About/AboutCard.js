import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Usman Abdulhadi Allahnana </span> 
             from <span className="purple"> Jos, Nigeria.</span>
            <br />I am a junior front-end developer and UI/UX Designer, also a final year student in the University of Jos, Nigeria.
            <br />
            <br />
            Apart from coding & Design, some other activities I love doing are!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games.
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies.
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new things.
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Aspiring to build new things that makes difference!!"{" "}
          </p>
          <footer className="blockquote-footer">Dev_Abdul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

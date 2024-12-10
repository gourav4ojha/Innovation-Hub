import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gourav Ojha </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            Currently pursuing my B.Tech degree in Computer Science from Chandigarh University
            <br />
            A visionary software developer driven by curiosity and innovation, blending technical expertise with creative problem-solving to craft impactful solutions
            Passionate about turning ambitious ideas into reality through cutting-edge technologies, teamwork, and a commitment to continuous growth
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight />Listning Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to do something impactful!"{" "}
          </p>
          <footer className="blockquote-footer">Gourav Ojha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

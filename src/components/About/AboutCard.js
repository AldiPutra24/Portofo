import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am Aldi
            from Yogyakarta, Indonesia
            <br />
            I am currently studying machine learning.
            <br />
            I am currently studying at Amikom University Yogyakarta majoring in Informatics Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#E7F0DC" }}>
            "Strive not to be a success, but rather to be of value."{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

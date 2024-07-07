import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import gesturo from "../../Assets/Projects/gesturo.jpg";
import dataanalyst from "../../Assets/Projects/da.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gesturo}
              isBlog={false}
              title="Gesturo - Sign Learning and Sign Language Translation Application"
              description="The creation of sign language learning and translation apps is crucial to improving the quality of life for the deaf community and promoting social inclusion."
              ghLink="https://github.com/gesturo-team"
              demoLink="https://github.com/gesturo-team/Mobile-Development/releases/tag/v1.0.0"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Timing-Point "
              description="Timing Point is a web-based todolist application. There are several 4 on this website."
              ghLink="https://github.com/AldiPutra24/Timing-Point"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataanalyst}
              isBlog={false}
              title="Dashboard Data Analyst Bike Sharing"
              description="This project aims to analyze the data in the Bike Sharing Dataset with the aim of understanding bike lending patterns, influencing factors, and trends in bike usage over time."
              ghLink="https://github.com/AldiPutra24/Proyek-Analisis-Data_Bike-Sharing.git"
              demoLink="https://aldiputra.streamlit.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

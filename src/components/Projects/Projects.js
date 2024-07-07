import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCard2 from "./ProjectCards2";
import ProjectCard3 from "./ProjectCards3";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import gesturo from "../../Assets/Projects/gesturo.jpg";
import dataanalyst from "../../Assets/Projects/da.png";
import ngapotik from "../../Assets/Projects/ngapotik.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard3
              imgPath={gesturo}
              isBlog={false}
              title="Gesturo - Sign Learning and Sign Language Translation Application"
              description="The creation of sign language learning and translation apps is crucial to improving the quality of life for the deaf community and promoting social inclusion."
              ghLink="https://github.com/gesturo-team"
              demoLink="https://github.com/gesturo-team/Mobile-Development/releases/tag/v1.0.0"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Timing-Point "
              description="Timing Point is a web-based todolist application. There are several 4 on this website."
              ghLink="https://github.com/AldiPutra24/Timing-Point"
            />
          </Col>
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
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={ngapotik}
              title="UI/UX Design App"
              description="Ngapotik is an application designed to simplify pharmacy management, providing efficient and user-friendly digital solutions for pharmacy owners, pharmacists, and customers. The project includes user interface (UI) and user experience (UX) designs optimized to provide an intuitive and pleasant usage experience."
              demoLink="https://www.figma.com/design/UALG79I3QrmT6PPs3pqVxr/Ngapotik-E-Health?node-id=0-1&t=nwgsLmox7WGxdYph-1"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

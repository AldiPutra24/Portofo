import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCard2 from "./ProjectCards2";
import ProjectCard3 from "./ProjectCards3";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import gesturo from "../../Assets/Projects/gesturo.jpg";
import playman from "../../Assets/Projects/playman.png";
import dataanalyst from "../../Assets/Projects/da.png";
import ngapotik from "../../Assets/Projects/ngapotik.png";
import mgizi from "../../Assets/Projects/mgizi.png";
import sfood from "../../Assets/Projects/sfood.png";

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
            <ProjectCard3
              imgPath={playman}
              isBlog={false}
              title="PlayMan - Music Player App"
              description="PlayMan is a music player app designed to provide users with a fun and intuitive music listening experience."
              ghLink="https://github.com/AldiPutra24/Music-Players.git"
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
              title="UI/UX Design App Ngapotik"
              description="Ngapotik is an application designed to simplify pharmacy management, providing efficient and user-friendly digital solutions for pharmacy owners, pharmacists, and customers. The project includes user interface (UI) and user experience (UX) designs optimized to provide an intuitive and pleasant usage experience."
              demoLink="https://www.figma.com/design/UALG79I3QrmT6PPs3pqVxr/Ngapotik-E-Health?node-id=0-1&t=nwgsLmox7WGxdYph-1"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={mgizi}
              title="UI/UX Design App MGIZI"
              description="The app provides features to track food consumed, calculate calorie requirements, as well as provide nutritional recommendations based on the user's individual needs. The project involved user interface (UI) and user experience (UX) designs that were optimized to provide an easy and engaging experience."
              demoLink="https://www.figma.com/design/NgVtHVv5SDHUno5na3LcYE/UI%2FUX-MGIZI?node-id=0-1&t=DozlDl8p7WrkIRdW-1"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={sfood}
              title="UI/UX Design Shopeefood"
              description="The project involves the design of user interface (UI) and user experience (UX) optimized to provide ease and comfort for users."
              demoLink="https://www.figma.com/design/gRSdy47YqXAi21p9SrJxNj/UI%2FUX-ShopeeFood?node-id=0-1&t=d65vnhpl4fGA4Bh9-1"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

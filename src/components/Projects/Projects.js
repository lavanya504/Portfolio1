import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Fraud  from "../../Assets/Projects/Fraud.jpeg"; 
import Empmgmt from "../../Assets/Projects/Empmgmt.jpg";
import StdMgmt from "../../Assets/Projects/StdMgmt.webp";
import cafeteria from "../../Assets/Projects/cafeteria.jpg";
import Hsptl from "../../Assets/Projects/Hsptl.jpeg";
import emotion from "../../Assets/Projects/emotion.png"; // Missing import fixed
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fraud} // Use absolute path
              isBlog={false}
              title="Fake Account Detection"
              description="Developed a machine learning model with 95% accuracy to detect fake social media accounts by analyzing user behavior and activity patterns."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Empmgmt}
              isBlog={false}
              title="Employee Management System"
              description="Developed an Employee Management System with CRUD operations, enabling efficient employee data management and search functionality."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StdMgmt}
              isBlog={false}
              title="Student Management"
              description="Developed a Student Management System using .NET with CRUD operations and SQL Server integration for efficient student data management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cafeteria} 
              isBlog={false}
              title="Cafeteria WebPage"
              description="Designed a clean and engaging static cafeteria website using modern frontend technologies for a seamless browsing experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hsptl}
              isBlog={false}
              title="Hospital Management Website"
              description="Crafted a sleek and intuitive static Hospital Management Website during a hackathon, enhancing user experience with well-structured layouts and seamless navigation."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="A CNN classifier trained on the FER-2013 dataset to predict human emotions. Achieved 60.1% accuracy and integrated OpenCV for real-time face detection."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

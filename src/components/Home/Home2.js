import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I have basic knowledge on 
              <i>
                <b className="purple"> C, Java, ReactJS, Frontend Technologies </b>
              </i>
              <br />
              <br />
              As a Java trainee, I am actively learning &nbsp;
              <i>
                <b className="purple">Web Technologies and Software development </b> to
                enhance my skills and build {" "}
                <b className="purple">Impactful solutions.</b>
              </i>
              <br />
              <br />
              I am eager to apply my growing expertise in Java and web development to create efficient and scalable solutions.
              
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/lavanya504"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
               <a
                  href="mailto:lavanyakanakam88@gmail.com"
                   target="_blank"
                  rel="noreferrer"

                  className="icon-colour home-social-icons"
                  >
                  <AiOutlineMail />
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kanakam-lavanya-36732527"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/crazyy_robertt"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

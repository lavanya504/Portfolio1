import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiJava, DiPython, DiBootstrap } from "react-icons/di";
import { SiHtml5, SiCss3, SiMysql, SiC } from "react-icons/si";
import { FaJava } from "react-icons/fa"; // Advanced Java

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 /> {/* HTML5 */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 /> {/* CSS3 */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* ReactJS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /> {/* Core Java */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava /> {/* Advanced Java */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* Python */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC /> {/* C Programming */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* MySQL */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap /> {/* Bootstrap */}
      </Col>
    </Row>
  );
}

export default Techstack;

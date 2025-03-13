import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode } from "react-icons/si";
import { DiEclipse } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiNotepadplusplus } from "react-icons/si";
import { DiGit } from "react-icons/di"; // Added Git

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse /> {/* Eclipse */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* SQL Plus (MySQL) */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotepadplusplus /> {/* EditPlus (Closest available icon) */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> {/* Git */}
      </Col>
    </Row>
  );
}

export default Toolstack;

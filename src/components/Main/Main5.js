import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Main5() {
  return (
    <Container>
        <Row style={{ justifyContent: "center" }}>
        <Col>
          <div className="timeline-box">
            <img className="timeline" alt="timeline" src="img/session.png"></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main5;
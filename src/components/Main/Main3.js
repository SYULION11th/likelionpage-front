import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Main3() {
  return (
    <Container>
        <Row style={{ justifyContent: "center" }}>
        <Col>
          <div className="timeline-box">
            <img className="timeline" alt="timeline" src="img/timeline.png"></img>
            <img className="timeline-mobile" alt="timeline-mobile" src="img/timeline-mobile.png"></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main3;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Main3() {
  return (
    <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "100px" }}>
        <Col>
            <div className="tempBox">
              연혁 나올 곳
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main3;
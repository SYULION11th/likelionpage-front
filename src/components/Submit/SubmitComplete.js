import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SubmitComplete() {
  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <Col>
          <div className="CompleteBox">
            제출완료
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SubmitComplete;
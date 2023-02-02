import React from "react";
import { Container,Row,Col } from "react-bootstrap";
function Question() {
  return (
    <Container fluid>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={12}>
          <div className="mainBack"></div>
          <h1 className="Title">Q&A</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Question;

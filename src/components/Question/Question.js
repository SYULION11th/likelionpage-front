import React from "react";
import { Container,Row,Col } from "react-bootstrap";
function Question() {
  return (
    <Container
    fluid="fluid"
    className="p-0"
    style={{
        backgroundColor: "#0A3479",
    }}>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={12}
        style={{ height: "600px"}}>
          <div className="mainBack"></div>
          <h1 className="Title"
          style={{
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "50px",
            fontWeight: "bold",
          
          }}>서비스 준비중 입니다.</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Question;

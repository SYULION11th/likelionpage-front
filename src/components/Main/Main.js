import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Main2 from "./Main2.js";
function Main() {
  return (
    <Container fluid>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={12}>
            <img className="mainImg" alt="mainImg" src="img/Main.png"></img>            
            <h1 className="Title">멋쟁이 사자처럼 11기</h1>
          
        </Col>
        <Col md={12}>
          <Main2 />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
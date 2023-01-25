import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Main2 from "./Main2.js";
import Main3 from "./Main3.js";
import Experiences from "./Experiences.js";

function Main() {
  return (
    <Container fluid>
        <Row style={{ justifyContent: "center", paddingBottom: "100px" }}>
        <Col md={12}>
            <img className="MainImg" alt="mainImg" src="img/sample.png"></img>            
            <h1 className="Title">멋쟁이 사자처럼 11기</h1>
            <button className="MainButton">아기사자 지원하기</button>
            <button className="DownButton">V</button>

        </Col>
        <Col md={12}>
          <Main2 />
        </Col>
        <Col md={12}>
          <Main3 />
        </Col>
        <Col md={12}>
          <Experiences />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Main1 from "./Main1.js";
import Main2 from "./Main2.js";
import Main3 from "./Main3.js";
import Main4 from "./Main4.js";
import Main5 from "./Main5.js";
import Main6 from "./Main6.js";
import ScrollDown from "../ScrollDown.js";
import Type from "./Type.js";

function Main() {
    return (
        <Container fluid="fluid" className="p-0">
            <Row style={{
                    justifyContent: "center"
                }}>
                <Col
                    md={12}
                    style={{
                        height: "600px",
                        backgroundImage: "url(img/main.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        filter: "brightness(0.4)"
                    }}></Col>

                <Col md={12}>
                    <div className="typeBox">
                        <Type/>
                    </div>
                    <div className="MainTitle">
                        <h1>멋쟁이사자처럼 삼육대학교 11기</h1>
                    </div>
                    <button className="MainButton">아기사자 지원하기</button>
                    <ScrollDown/>

                </Col>

                <Col md={12}>
                    <Main1/>
                </Col>
                <Col
                    md={12}
                    style={{
                        backgroundImage: "url(img/study-background.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}>
                    <Main2/>
                </Col>
                <Col md={12}>
                    <Main3/>
                </Col>
                <Col
                    md={12}
                    style={{
                        backgroundColor: "#015CCC"
                    }}>
                    <Main4/>
                </Col>
                <Col md={12}>
                    <Main5/>
                </Col>
                <Col
                    md={12}
                    style={{
                        backgroundImage: "url(img/lion-background.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}>
                    <Main6/>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import SubmitButton from "./SubmitButton";
import QuestionButton from "./QuestionButton";
function Main6() {
    return (
        <Container>
            <Row
                style={{
                    justifyContent: "center",
                    paddingTop: "100px",
                    paddingBottom: "100px"
                }}>
                <Col md={12}>
                    <div className="article-title-box">
                        <p className="Blue-Title-Article">멋쟁이사자처럼 삼육대학교와 함께 “가능성을 현실로”</p>
                    </div>
                </Col>
                <Col md={12}>
                    <div className="button-box">
                        <SubmitButton/>
                    </div>
                </Col>
                &nbsp;
                <Col md={12}>
                    <div className="button-box">
                        <QuestionButton/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Main6;
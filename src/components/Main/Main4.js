import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import StudyCards from "./StudyCards.js";

function Main4() {
    return (
        <Container className="study-section">
            <Row
                style={{
                    justifyContent: "center",
                    paddingTop: "100px",
                    paddingBottom: "100px"
                }}>

                <Col md={5}>
                    <div className="Blue-Title-Box">
                        <p className="Blue-Title-Study">
                            멋쟁이사자처럼<br/> 삼육대학교는 웹의<br/> 기초부터 심화까지<br/> 함께 공부해요.</p>
                    </div>
                    <div className="Description-Box">

                        <p className="Blue-Description-Study">* 웹 기초 공통 교육 후 기획·디자인 / 프론트엔드 / 백엔드<br/> 트랙을 선택해 트랙별 심화교육이 진행됩니다.</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="Study-Box">
                        <StudyCards/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Main4;
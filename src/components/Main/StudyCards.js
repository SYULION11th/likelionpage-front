import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import StudyCard from "./StudyCard";

function StudyCards() {

    return (
        <Container fluid="fluid" className="study-section">
            <Container>

                <Row
                    style={{
                        justifyContent: "center",
                        paddingBottom: "10px"
                    }}>

                    <Col xs={6} md={6} className="study-card">
                        <StudyCard description="서비스 기획"/>
                    </Col>

                    <Col xs={6} md={6} className="study-card">
                        <StudyCard description="HTML"/>
                    </Col>

                    <Col xs={6} md={6} className="study-card">
                        <StudyCard description="UI/UX 디자인"/>
                    </Col>

                    <Col xs={6} md={6} className="study-card">
                        <StudyCard description="CSS"/>
                    </Col>

                    <Col xs={6} md={6} className="study-card">
                        <StudyCard description="Python"/>
                    </Col>

                    <Col xs={6} md={6} className="study-card">
                        <StudyCard description="JavaScript"/>
                    </Col>

                    <Col xs={6} md={6} className="study-card">
                        <StudyCard description="Django"/>
                    </Col>

                    <Col xs={6} md={6} className="study-card">
                        <StudyCard description="React"/>
                    </Col>

                    <Col xs={6} md={6} className="study-card">
                        <StudyCard description="Java"/>
                    </Col>

                    <Col xs={6} md={6} className="study-card">
                        <StudyCard description="Figma"/>
                    </Col>

                    <Col xs={6} md={6} className="study-card">
                        <StudyCard description="Spring Boot"/>
                    </Col>

                    <Col xs={6} md={6} className="study-card">
                        <StudyCard description="Git"/>
                    </Col>


                </Row>
            </Container>
        </Container>
    );
}

export default StudyCards;
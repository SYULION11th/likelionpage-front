import React from "react";
import {Container, Row, Col} from "react-bootstrap";
function Main1() {
    return (
        <Container>
            <Row
                style={{
                    justifyContent: "center",
                    paddingTop: "100px",
                    paddingBottom: "100px"
                }}>
                <Col md={5}>

                    <div className="logo-box">
                        <img className="logo-square" alt="logo-sqaure" src="img/logo.png"></img>
                    </div>
                </Col>
                <Col md={5}>
                    <div className="logo-title-box">
                        <img className="logo-title" alt="logo-title" src="img/logo-title.png"></img>
                    </div>
                    <p className="Article">멋쟁이사자처럼 대학은 테크 기반의<br/> 아이디어 실현을 위한 전국 최대 규모의<br/> 대학 연합 IT 창업 동아리입니다.</p>
                    <p className="Article" style={{ fontSize:"1em" }}>(2023년 기준 전국 61개 대학교와 함께 활동합니다.)</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Main1;
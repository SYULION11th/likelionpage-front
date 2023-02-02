import React from "react";
import {Container, Row, Col} from "react-bootstrap";
function Main2() {
    return (
        <Container>
            <Row
                style={{
                    justifyContent: "center",
                    paddingTop: "100px",
                    paddingBottom: "100px",
                }}>
                <Col md={12}>
                    <div className="article-title-box">
                        <p className="Blue-Title-Article">코딩 경험이 없어도 괜찮아요.</p>
                        <p className="Blue-Title-Article">멋대에서 코딩을 배워 사자들과 함께 아이디어를 실현해보세요.</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="article-content-box">
                        <p className="Blue-Article">초급자를 위한 VOD 강의 무료 제공</p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="article-content-box">
                        <p className="Blue-Article">서비스 빌딩을 위한 기획 / 디자인 입체적 교육</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Main2;
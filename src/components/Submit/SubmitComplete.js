import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import CompleteCheck from "../../Assets/complete-check.png";

function SubmitComplete() {
  window.onload = function () {
    scrollToTop();
  }
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  
  }
    return (
        <Container fluid="fluid" className="p-0">
            <Row style={{
                    justifyContent: "center"
                }}>
                <Col
                    md={12}
                    style={{
                        backgroundColor: "#0A3479",
                        minHeight: "90vh"
                    }}>
                    <div className="SubmitTitleBox">
                        <h3 className="SubmitTitle">멋쟁이사자처럼 삼육대학교 11기 아기사자 지원</h3>
                        <div className="SubmitLine"></div>
                        <p className="SubmitSubTitle">
                            POSSIBILITY TO REALITY. 멋사와 함께 가능성을 현실로.
                        </p>
                    </div>
                </Col>
                <Col md={12}>
                    <div className="SubmitCompleteBox">
                        <img
                            className="submit-check-img"
                            alt="submit-check"
                            src={ CompleteCheck }></img>
                        <h1 className="SubmitCompleteTitle">지원폼이 제출되었습니다. 감사합니다.</h1>
                    </div>
                </Col>

            </Row>
        </Container>
    );
}

export default SubmitComplete;
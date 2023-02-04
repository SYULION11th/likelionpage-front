import React, {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
function Submit() {

    const [textValue, setTextValue] = useState("");
    const handleSetValue = (e) => {
        setTextValue(e.target.value);
    };

    return (
        <Container fluid="fluid" className="p-0">
            <Row
                style={{
                    justifyContent: "center",
                }}>
                <Col
                    md={12}
                    style={{
                        backgroundColor: "#0A3479",
                        minHeight: "90vh"
                    }}>
                    <div className="SubmitTitleBox">
                        <h3 className="SubmitTitle">멋쟁이사자처럼 삼육대학교 11기 아기사자 지원</h3>
                        <div className="SubmitLine">

                        </div>
                        <p className="SubmitSubTitle">
                            POSSIBILITY TO REALITY. 멋사와 함께 가능성을 현실로.
                        </p>
                    </div>

                    <textarea
                        className="submit-textarea"
                        placeholder="여기에 입력하세요"
                        value={textValue}
                        onChange={(e) => handleSetValue(e)}></textarea>
                    <p className="paragraph">{textValue}</p>

                </Col>
            </Row>
        </Container>
    );
}

export default Submit;

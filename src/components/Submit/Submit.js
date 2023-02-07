import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

var isSubmit = false;

function TextInput() {

    var getName = document
        .getElementById("name")
        .value;
    var Department = document
        .getElementById("Department")
        .value;
    var studentid = document
        .getElementById("studentid")
        .value;
    var grade = document
        .getElementById("grade")
        .value;
    var phone = document
        .getElementById("phone")
        .value;
    var email = document
        .getElementById("email")
        .value;
    var content = document
        .getElementById("content")
        .value;

    axios
        .post(
            "https://port-0-likelionpage-back-1jx7m2gldjq856s.gksl2.cloudtype.app/api/jungb" +
                    "o/",
            {
                name: getName,
                Department: Department,
                studentid: studentid,
                grade: grade,
                phone: phone,
                email: email,
                content: content
            }
        )
        .then(function (response) {
            console.log(response);
            alert(`제출이 완료되었습니다`);
            isSubmit = true;

        })
        .catch(function (error) {
            console.log(error);
            alert(`입력 값을 다시 확인해주세요`);
            isSubmit = false;
        });

}

function GoComplete(navigate) {

    setTimeout(function () {
        if (isSubmit === true) {
            navigate("/Submit/SubmitComplete/");
        }

    }, 2000);
}

function Submit() {
    const navigate = useNavigate();
    console.log(navigate);
    return (
        <Container fluid="fluid" className="p-0">
            <Row style={{
                    justifyContent: "center"
                }}>
                <Col
                    md={12}
                    style={{
                        backgroundColor: "#0A3479",
                        minHeight: "150vh"
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
                    <input id="name" className="submit-textarea1" placeholder="김멋사"></input>
                </Col>

                <Col md={12}>
                    <input id="Department" className="submit-textarea2" placeholder="컴퓨터공학부"></input>
                </Col>
                <Col md={12}>
                    <input id="studentid" className="submit-textarea3" placeholder="2023100823"></input>
                </Col>
                <Col md={12}>
                    <input id="grade" className="submit-textarea4" placeholder="1"></input>
                </Col>
                <Col md={12}>
                    <input id="phone" className="submit-textarea5" placeholder="01012345678"></input>
                </Col>
                <Col md={12}>
                    <input id="email" className="submit-textarea6" placeholder="KimMutSa@naver.com"></input>
                </Col>
                <Col md={12}>
                    <textarea id="content" className="submit-textarea7" placeholder="지원동기 및 내용"></textarea>
                </Col>
                <Col md={12}>
                    <div>
                        <button
                            type="button"
                            className="post PostButton"
                            onClick={() => {
                                TextInput();
                                GoComplete(navigate);
                            }}>
                            제출하기
                        </button>

                    </div>
                </Col>
            </Row>
        </Container>
    );

}

export default Submit;

import React, {useState} from "react";
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
    const [disable, setDisable] = useState(true);
    const [visible, setVisible] = useState(false);

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
                    <div className="CheckBoxContainer">
                        <input
                            type="checkbox"
                            id="check"
                            name="check"
                            value="check"
                            onChange={() => {
                                setDisable(!disable);
                            }}/>
                        <label
                            for="check"
                            style={{
                                marginLeft: "10px"
                            }}>개인정보 수집 및 이용에 동의합니다.</label>
                        <button
                            onClick={() => setVisible(true)}
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                color: "white",
                                marginLeft: "20px",
                            }}>
                            자세히 보기
                        </button>

                    </div>
                </Col>
                <Col md={12}>
                    <div>
                        <button
                            disabled={disable}
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
                <div
                    className="Modal"
                    style={{
                        display: visible
                            ? 'block'
                            : 'none'
                    }}>
                    <div className="agreement-textarea">
                        <p className="agreement-text">
                            [개인정보 수집·이용 동의서]
                            <br/><br/>

                            주식회사 멋쟁이 사자처럼은 「정보통신망 이용촉진 및 정보보호에 관한 법률」 및 「개인정보보호법」 등 관련 법령상의 개인정보보호 규정을 준수하여
                            「22년 멋쟁이사자처럼 10기 모집」 참가자의 개인정보 및 권익을 보호하고, 개인정보와 관련한 참가자의 고충을 원활하게 처리할 수 있도록 다음과
                            같은 개인정보 처리방침을 두고 있습니다.
                            <br/><br/>

                            가. 개인 정보의 수집· 이용에 관한 사항
                            <br/><br/>

                            ▣ 개인 정보의 수집· 이용 목적 개인 정보는 1차적으로 본 프로그램 참가신청, 참가신청에 따른 본인확인, 개인식별, 프로그램 진행, 프로그램
                            관련 안내/고지사항 등의 전달, 문의사항 또는 불만사항 등의 확인 및 처리, 분쟁 조정을 위한 기록 보존 등을 위해 사용됩니다. 이후
                            멋쟁이사자처럼의 프로그램 및 브랜드 홍보를 위한 마케팅에 활용될 수 있습니다.
                            <br/><br/>

                            ▣ 수집하는 개인 정보의 항목 성명, 연락처, 이메일, 소속, 직업 등 신청 및 프로그램 운영 중 취득한 정보
                            <br/><br/>

                            ▣ 개인 정보의 보유· 이용기간 개인 정보는 원칙적으로 개인 정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 본 사업 종료 후
                            참여 인정 문서 발급을 위한 최소한의 자료(성명, 전화번호, 이메일)는 사업종료 이후 5년간 보존됩니다.
                            <br/><br/>

                            ▣ 동의를 거부할 권리 및 동의를 거부할 경우의 불이익 위 개인 정보의 수집· 이용에 거부할 권리가 있음을 알려드립니다. 단, 수집항목은 사업
                            진행을 위한 최소한의 필수 정보로서 개인 정보 수집· 이용에 동의하지 않으실 경우 프로그램 참가 및 제반 활동이 불가능합니다.
                            <br/><br/>

                            나. 개인 정보 제3자 제공에 관한 사항
                            <br/><br/>

                            ▣ 제공받는 자 주식회사 멋쟁이사자처럼
                            <br/><br/>

                            ▣ 제공받는 자의 목적 ‘22년 멋쟁이사자처럼 10기 모집’ 진행 및 운영, 참가자 관리, 마케팅 활용
                            <br/><br/>

                            ▣ 제공하는 개인 정보 항목 성명, 연락처, 이메일, 소속, 직업 등 신청 및 프로그램 운영 중 취득한 정보
                            <br/><br/>

                            ▣ 동의를 거부할 권리 및 동의를 거부할 경우의 불이익 위 제3자에 대한 개인 정보의 제공에 관한 동의를 거부할 수 있으나 본 프로그램 참가를
                            위해 필수적이므로 위 사항에 동의하셔야만 참가 및 활동이 가능합니다.
                        </p>
                    </div>

                    <button className="exitButton" onClick={() => setVisible(false)}>X</button>
                </div>
            </Row>
        </Container>
    );

}

export default Submit;

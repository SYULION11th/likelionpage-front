import React, {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

var isSubmit = false;

function TextInput(notebook, part, session) {

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
    var track = document
        .getElementById("track")
        .value;
    var cooperation = document
        .getElementById("cooperation")
        .value;
    var spend_time = document
        .getElementById("spend_time")
        .value;
    var portfolio = document
        .getElementById("portfolio")
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
                content: content,
                track: track,
                cooperation: cooperation,
                spend_time: spend_time,
                notebook: notebook,
                github: portfolio,
                my_track: part,
                session: session
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
    const [notebook, setNotebook] = useState('');
    const [part, setPart] = useState('');
    const [session, setSession] = useState('');

    return (
        <Container
            fluid="fluid"
            className="p-0"
            style={{
                backgroundColor: "#0A3479"
            }}>
            <Row style={{
                    justifyContent: "center"
                }}>
                <Col md={12}>
                    <div className="SubmitTitleBox">
                        <h3 className="SubmitTitle">멋쟁이사자처럼 삼육대학교 11기 아기사자 지원</h3>
                        <div className="SubmitLine"></div>
                        <p className="SubmitSubTitle">
                            POSSIBILITY TO REALITY. 멋사와 함께 가능성을 현실로.
                        </p>
                    </div>
                </Col>
                <Col xs={11} md={7}>
                    <p className="SubmitQuestion">1. 지원자의 성함을 입력해 주세요.</p>
                    <div className="BreakLine"></div>
                </Col>
                <Col xs={11} md={7}>
                    <input id="name" className="submit-textinput" placeholder="지원자 본인의 이름을 입력해주세요."></input>
                </Col>
                <Col xs={11} md={7}>
                    <p className="SubmitQuestion">2. 지원자의 학번을 입력해 주세요.</p>
                    <div className="BreakLine"></div>
                </Col>
                <Col xs={11} md={7}>
                    <input id="studentid" className="submit-textinput" placeholder="ex) 2021134567"></input>
                </Col>
                <Col xs={11} md={7}>
                    <p className="SubmitQuestion">3. 지원자의 학년을 입력해 주세요.</p>
                    <div className="BreakLine"></div>
                </Col>
                <Col xs={11} md={7}>
                    <input id="grade" className="submit-textinput" placeholder="1학년"></input>
                </Col>
                <Col xs={11} md={7}>
                    <p className="SubmitQuestion">4. 지원자의 소속 학과를 입력해 주세요.</p>
                    <div className="BreakLine"></div>
                </Col>
                <Col xs={11} md={7}>
                    <input
                        id="Department"
                        className="submit-textinput"
                        placeholder="지원자 본인의 소속학과를 입력해주세요. (부/복수전공시 주전공과 구분하여 적어주세요.)"></input>
                </Col>
                <Col xs={11} md={7}>
                    <p className="SubmitQuestion">5. 지원자의 핸드폰 번호를 입력해 주세요.</p>
                    <div className="BreakLine"></div>
                </Col>
                <Col xs={11} md={7}>
                    <input id="phone" className="submit-textinput" placeholder="ex) 010-1134-5677"></input>
                </Col>

                <Col xs={11} md={7}>
                    <p className="SubmitQuestion">6. 지원자의 이메일을 입력해 주세요.</p>
                    <div className="BreakLine"></div>
                </Col>
                <Col xs={11} md={7}>
                    <input id="email" className="submit-textinput" placeholder="KimMutSa@naver.com"></input>
                </Col>
                <Col xs={11} md={7}>
                    <p className="SubmitQuestion">7. 노트북 소지 여부를 선택해주세요.</p>
                    <div className="BreakLine"></div>
                </Col>
                <Col xs={11} md={7}>
                    <div className="SubmitRadioBox">
                        <input
                            type="radio"
                            name="notebookTrue"
                            id="notebookTrue"
                            value="True"
                            checked={notebook === 'True'}
                            onChange={() => setNotebook('True')}
                            className="submit-radio"></input>
                        <label for="notebookTrue">소지</label>
                        <input
                            type="radio"
                            name="notebookFalse"
                            id="notebookFalse"
                            value="True"
                            checked={notebook === 'False'}
                            onChange={() => setNotebook('False')}
                            className="submit-radio"></input>
                        <label for="notebookFalse">미소지</label>
                    </div>
                </Col>
                <Col xs={11} md={7}>
                    <p className="SubmitQuestion">8. 다양한 IT동아리 중에서 멋쟁이사자처럼 대학 10기를 선택하고 지원하시게 된 이유를 작성해주세요. (500자 이내)</p>
                    <div className="BreakLine"></div>
                </Col>
                <Col xs={11} md={7}>
                    <textarea id="content" className="submit-textarea" placeholder=""></textarea>
                </Col>

                <Col xs={11} md={7}>
                    <p className="SubmitQuestion">9. 멋쟁이사자처럼 대학 10기부터 기초 개발 스터디는 동일하게 진행되지만 이후에
                        기획/디자인 파트와 개발 파트 중 선택하여 진행하게 됩니다. 어느 파트에 지원하시나요?
                    </p>
                    <div className="BreakLine"></div>
                </Col>
                <Col xs={11} md={7}>
                    <div className="SubmitRadioBox">
                        <input
                            type="radio"
                            name="Design"
                            id="Design"
                            value="True"
                            checked={part === 'Design'}
                            onChange={() => setPart('Design')}
                            className="submit-radio"></input>
                        <label for="Design">기획/디자인</label>
                        <input
                            type="radio"
                            name="Development"
                            id="Development"
                            value="True"
                            checked={part === 'Development'}
                            onChange={() => setPart('Development')}
                            className="submit-radio"></input>
                        <label for="Development">개발</label>
                    </div>
                </Col>

                <Col xs={11} md={7}>
                    <p className="SubmitQuestion">9-1. 위의 파트를 선택한 이유와 관련 경험을 해본 적이 있는지, 그리고 이 파트를 통해
                        어떠한 성장을 희망하시는지 작성해주세요. (500자 이내)</p>
                    <div className="BreakLine"></div>
                </Col>
                <Col xs={11} md={7}>
                    <textarea id="track" className="submit-textarea" placeholder=""></textarea>
                </Col>

                <Col xs={11} md={7}>
                    <p className="SubmitQuestion">10. 멋쟁이사자처럼 대학은 협업과 팀워크를 중요한 가치로 생각하는 공동체입니다. 지원자
                        본인이 협업과 팀워크를 진행해보았던 경험과, 그 경험을 멋쟁이사자처럼 대학에 어떻게 적용시킬 수 있을지 작성해주세요. (500자 이내)</p>
                    <div className="BreakLine"></div>
                </Col>
                <Col xs={11} md={7}>
                    <textarea id="cooperation" className="submit-textarea" placeholder=""></textarea>
                </Col>
                <Col xs={11} md={7}>
                    <p className="SubmitQuestion">11. 멋쟁이사자처럼 대학은 최소 주 2회 모임 & 10시간 이상의 시간 투자를
                        권장합니다. 활동 기간동안 얼마나 열정적으로, 매주 얼만큼의 시간을 할애하실 수 있는지 작성해주세요. (500자 이내)</p>
                    <div className="BreakLine"></div>
                </Col>
                <Col xs={11} md={7}>
                    <textarea id="spend_time" className="submit-textarea" placeholder=""></textarea>
                </Col>
               

                <Col xs={11} md={7}>
                    <p className="SubmitQuestion-0">11-1. 멋쟁이사자처럼 정기세션은 매주 목요일 17시에 진행됩니다. 매주 참석 가능하신지
참석 여부를 선택해주세요. (세션시간 약 2시간)
                    </p>
                    <p className="SubmitQuestion-1">* 세션 진행 시간은 추후에 변경될 수 있습니다.
</p>
                    <div className="BreakLine"></div>
                </Col>
                <Col xs={11} md={7}>
                    <div className="SubmitRadioBox">
                        <input
                            type="radio"
                            name="Session"
                            id="Session"
                            value="True"
                            checked={session === '참석가능'}
                            onChange={() => setSession('참석가능')}
                            className="submit-radio"></input>
                        <label for="Session">참석 가능</label>
                        <input
                            type="radio"
                            name="Session"
                            id="Session"
                            value="True"
                            checked={session === '참석가능'}
                            onChange={() => setSession('참석가능')}
                            className="submit-radio"></input>
                        <label for="Session">참석 불가능</label>
                    </div>
                </Col>




                <Col xs={11} md={7}>
                    <p className="SubmitQuestion">12. 본인의 Github나 디자인 포트폴리오가 있다면 링크를 첨부해주세요.</p>
                    <div className="BreakLine"></div>
                </Col>
                <Col xs={11} md={7}>
                    <input id="portfolio" className="submit-textinput" placeholder="https://github.com/SYULION11th"></input>
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
                            htmlFor="check"
                            style={{
                                marginLeft: "10px"
                            }}>개인정보 수집 및 이용에 동의합니다.</label>
                        <button
                            onClick={() => setVisible(true)}
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                color: "white",
                                marginLeft: "20px"
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
                                TextInput(notebook, part, session);
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
                            「23년 멋쟁이사자처럼 11기 모집」 참가자의 개인정보 및 권익을 보호하고, 개인정보와 관련한 참가자의 고충을 원활하게 처리할 수 있도록 다음과
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
                            ▣ 제공받는 자의 목적 ‘23년 멋쟁이사자처럼 11기 모집’ 진행 및 운영, 참가자 관리, 마케팅 활용
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

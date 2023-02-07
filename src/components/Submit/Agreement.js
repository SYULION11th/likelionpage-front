import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import CompleteCheck from "../../Assets/complete-check.png";

function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}

function Agreement() {
  window.onload = function () {
    scrollToTop();
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
                        개인정보 수집 이용 동의서
                        </p>
                    </div>
                </Col>
                <Col md={12}>
                  <div className="agreement-textarea">
                  <p className="agreement-text">
                  [개인정보 수집·이용 동의서]
<br/><br/>

주식회사 멋쟁이 사자처럼은 「정보통신망 이용촉진 및 정보보호에 관한 법률」 및 「개인정보보호법」 등 관련 법령상의 개인정보보호 규정을 준수하여 「22년 멋쟁이사자처럼 10기 모집」 참가자의 개인정보 및 권익을 보호하고, 개인정보와 관련한 참가자의 고충을 원활하게 처리할 수 있도록 다음과 같은 개인정보 처리방침을 두고 있습니다.
<br/><br/>


가. 개인 정보의 수집· 이용에 관한 사항
<br/><br/>


▣ 개인 정보의 수집· 이용 목적
개인 정보는 1차적으로 본 프로그램 참가신청, 참가신청에 따른 본인확인, 개인식별, 프로그램 진행, 프로그램 관련 안내/고지사항 등의 전달, 문의사항 또는 불만사항 등의 확인 및 처리, 분쟁 조정을 위한 기록 보존 등을 위해 사용됩니다. 이후 멋쟁이사자처럼의 프로그램 및 브랜드 홍보를 위한 마케팅에 활용될 수 있습니다.
<br/><br/>


▣ 수집하는 개인 정보의 항목
성명, 연락처, 이메일, 소속, 직업 등 신청 및 프로그램 운영 중 취득한 정보
<br/><br/>


▣ 개인 정보의 보유· 이용기간
개인 정보는 원칙적으로 개인 정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 본 사업 종료 후 참여 인정 문서 발급을 위한 최소한의 자료(성명, 전화번호, 이메일)는 사업종료 이후 5년간 보존됩니다.
<br/><br/>

▣ 동의를 거부할 권리 및 동의를 거부할 경우의 불이익
위 개인 정보의 수집· 이용에 거부할 권리가 있음을 알려드립니다. 단, 수집항목은 사업 진행을 위한 최소한의 필수 정보로서 개인 정보 수집· 이용에 동의하지 않으실 경우 프로그램 참가 및 제반 활동이 불가능합니다.
<br/><br/>

나. 개인 정보 제3자 제공에 관한 사항
<br/><br/>

▣ 제공받는 자
주식회사 멋쟁이사자처럼
<br/><br/>

▣ 제공받는 자의 목적
‘22년 멋쟁이사자처럼 10기 모집’ 진행 및 운영, 참가자 관리, 마케팅 활용
<br/><br/>

▣ 제공하는 개인 정보 항목
성명, 연락처, 이메일, 소속, 직업 등 신청 및 프로그램 운영 중 취득한 정보
<br/><br/>

▣ 동의를 거부할 권리 및 동의를 거부할 경우의 불이익
위 제3자에 대한 개인 정보의 제공에 관한 동의를 거부할 수 있으나 본 프로그램 참가를 위해 필수적이므로 위 사항에 동의하셔야만 참가 및 활동이 가능합니다.                    </p>
                  </div>

                    
                </Col>

            </Row>
        </Container>
    );
}

export default Agreement;
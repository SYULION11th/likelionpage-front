import { Container,Row,Col } from "react-bootstrap";
import logo from "../../Assets/logo.png"
import Q from "../../Assets/Q.png"
import './Write.css';
import './Question.js';
import './Page.css';
import './Media.css';
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Addtitle() {
  const [input, setInput] = useState([]);




return(

    <Container fluid="fluid" className="p-0">
      <Row style={{ justifyContent:'center'}}>
      <Col md={12} style={{ padding:'0px'}}>
      <div className="titleWrap">
        <div className="textbox1">
            멋쟁이사자처럼 삼육대학교 Q&A
        </div>
        <div className="line1">
        </div>
        <div className="textbox2">
            무엇이든 물어보세요. 삼육대학교 멋사운영진들이 직접 답합니다.
        </div>
    </div>
          </Col>
        <Col md={10}>
        <div className="board_wrap">
        <div className="board_view_wrap">
            <div className="board_view">
                <div className="title">
                    '멋쟁이사자처럼' 무슨 동아리인가요?
                </div>
                <div className="info">
                    <dl>
                        <dt>번호</dt>
                        <dd>1</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>운영진</dd>
                    </dl>
                    <dl>
                        <dt>등록일</dt>
                        <dd>2023.2.13</dd>
                    </dl>
                </div>
                <div className="cont">
                    '코딩을 배우고 싶다.'<br></br>
                    '코딩을 하고 싶다.'<br></br>
                    '프로젝트 경험을 쌓고 싶다'<br></br>
                    '아이디어가 있는데 실현할 실력이 없다'<br></br>
                    <p></p>
                    그렇다면 지금 당장 '멋쟁이 사자처럼'으로!<br></br>
                    <p></p>
                    멋쟁이 사자처럼은 프로그래머 이두희가 2013년에 설립한 프로그래밍 교육 단체입니다.<br></br>
                    비전공자는 교육을 통해 얻은 프로그래밍 지식으로 자신만의 웹서비스를 만들 수 있으며, 전공자는 다양한 프로젝트 경험을 통한
                    실력 향상 및 협업을 통한 폭넓은 식견을 얻을 수 있습니다. <br></br>
                    <p></p>
                    *현재 멋쟁이 사자처럼은 서울대, 서강대, 성균관대, 한양대, 이화여대, 중앙대 등 전국 61개 대학교와 함께 활동합니다.(2023년 기준)
                                   
             </div>
            </div>
            <div className="bt_wrap">
                <Link to="/Question/" className="on" style={{textDecoration:"none", color:"#0B3479"}}>목록</Link>
            </div>
            </div>
            </div>
        </Col>
      </Row>
</Container>

  );
}

export default Addtitle;

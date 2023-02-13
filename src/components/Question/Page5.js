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
                    'OT'필수 참여인가요?
                </div>
                <div className="info">
                    <dl>
                        <dt>번호</dt>
                        <dd>5</dd>
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
                OT 시간에는 앞으로 동아리의 운영계획과 더불어 동아리 활동을 하며 꼭 알아야 하는 중요한 내용들을 안내해드릴 예정입니다. 바쁘시더라도 해당 시간에는 되도록 자리를 지켜주셨으면 좋겠습니다. 😥<br></br>
                <p></p>
                장소 : google meet<br></br>
                일시 : 3월 26일(금요일)<br></br>
                시간 : 오후 5시(예정)<br></br>
                <p></p>
                *추후 자세한 일정을 공지하도록 하겠습니다.

             </div>
            </div>
            <div className="bt_wrap">
                <Link to="/Question/" className="on" style={{textDecoration:"none", color:"#0B3479"}} >목록</Link>
            </div>
            </div>
            </div>
        </Col>
      </Row>
</Container>

  );
}

export default Addtitle;
